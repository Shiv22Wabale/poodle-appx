REPO=poodlehub
NAME=poodle-appx
VERSION=0.1

run:
	+$(MAKE) -C app run

build:
	+$(MAKE) -C app build
	+$(MAKE) -C ui build

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
