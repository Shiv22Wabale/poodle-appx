Name:               poodle-appx
Version:            %{_v_pkg_version}
Release:            1%{?dist}
Summary:            poodle-appx
Group:              Data Platform
License:            Visa Inc
URL:                https://usa.visa.com
BuildRequires:      /bin/rm, /bin/mkdir, /bin/cp, /bin/sh, /bin/chmod
Prefix:             /
AutoReq:            no

# package specific value
%define __jar_repack        %{nil}
%define __check_files       %{nil}
%define _build_name_fmt     %{ARCH}/%{NAME}-%{VERSION}-%{RELEASE}.%{ARCH}.rpm

%description
conda-env

%prep

%build

%install
rm -rf $RPM_BUILD_ROOT
install --directory $RPM_BUILD_ROOT/poodle-appx

cp -R %{_topdir}/../app                     $RPM_BUILD_ROOT/poodle-appx/
cp -R %{_topdir}/../ui                      $RPM_BUILD_ROOT/poodle-appx/
cp -R %{_topdir}/../Makefile                $RPM_BUILD_ROOT/poodle-appx/

%files
%attr(0755, -, -) %{prefix}/poodle-appx/Makefile

%dir
%attr(0755, -, -) %{prefix}/poodle-appx/app
%attr(0755, -, -) %{prefix}/poodle-appx/ui

%clean
rm -rf $RPM_BUILD_ROOT

%post

%changelog
