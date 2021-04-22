REPO=poodlehub
NAME=poodle-appx
VERSION=0.1
TAG ?= $(eval TAG := $(shell git describe --tags --always --dirty)-$(shell git diff | sha256sum | cut -c -6))$(TAG)
TAG_VERSION=$(subst -e3b0c4,,$(TAG))
RPM_VERSION=$(subst -,.,$(TAG_VERSION))
DEPLOY_PKG=poodle-aapx
CURDIR := $(shell pwd)

run:
	+$(MAKE) -C app run

install:
	+$(MAKE) -C app build
	+$(MAKE) -C ui build

build:
	rpmbuild -v -bb $(CURDIR)/rpmbuild/SPECS/poodle-appx.spec --define '_v_pkg_version ${RPM_VERSION}' --define  '_topdir $(CURDIR)/rpmbuild'

init:
	+$(MAKE) -C app init

init-env:
	+$(MAKE) -C app init-env ${INIT_PATH}

sonar-master:
	sonar-scanner -Dsonar.projectName=parsec.poodle-appx -Dsonar.projectKey=parsec.poodle-appx -Dsonar.projectVersion=1.0 -Dsonar.sources=./app/src,./ui/spec,./ui/app-x

sonar-pr:
	sonar-scanner -Dsonar.projectName=parsec.poodle-appx -Dsonar.projectKey=parsec.poodle-appx -Dsonar.projectVersion=1.0 -Dsonar.sources=./app/src,./ui/spec,./ui/app-x -Dsonar.branch.name=$(GIT_BRANCH) -Dsonar.branch.target=master

start-ui:
	+$(MAKE) -C ui start

image:
	docker build --tag ${REPO}/${NAME}:${VERSION} --rm .

image-nocache:
	docker build --tag ${REPO}//${NAME}:${VERSION} --no-cache --rm .

tag:
	docker tag ${REPO}/$(NAME):$(VERSION) ${REPO}/$(NAME):$(VERSION)

tag-latest:
	docker tag ${REPO}/$(NAME):$(VERSION) ${REPO}/$(NAME):latest

push:
	docker push ${REPO}/$(NAME):$(VERSION)

push-latest:
	docker push ${REPO}/$(NAME):latest

release-image: image tag tag-latest push push-latest

release: release-image

test:
	+$(MAKE) -C app test
