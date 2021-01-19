# IkData Windows 10 Installer <!-- omit in toc -->

![Ik-Data Logo](https://github.com/Ortega-Dan/IkData-Installers/blob/main/windowsInstaller/imgs/Ik-Data.png?raw=true)

- [Download requirements](#download-requirements)
  - [Java 11](#java-11)
  - [MySQL](#mysql)
    - [MySQL Installation](#mysql-installation)
- [Install Ik-Data](#install-ik-data)
- [Uninstall](#uninstall)

## Download requirements

### Java 11

Download `OpenJDK 11` from [Adopt OpenJDK](https://adoptopenjdk.net)

### MySQL

Download `MySQL Installer 8.0.22` from [MySQL Community Downloads](https://dev.mysql.com/get/Downloads/MySQLInstaller/mysql-installer-web-community-8.0.22.0.msi)

#### MySQL Installation

1. Open `MySQL Installer 8.0.22` and select Custom option.

   - ![mysql-inst1](https://github.com/Ortega-Dan/IkData-Installers/blob/main/windowsInstaller/imgs/mysql-inst1.png)

2. In the Available Products select:

   - `MySQL Server 8.0.21`
   - `MySQL ODBC`
   - ![mysql-inst2](https://github.com/Ortega-Dan/IkData-Installers/blob/main/windowsInstaller/imgs/mysql-inst2.png)

3. Select Standalone option and continue with the installation.

   - ![mysql-inst3](https://github.com/Ortega-Dan/IkData-Installers/blob/main/windowsInstaller/imgs/mysql-inst3.png)

## Install Ik-Data

- Open Windows Powershell as Administrator, go to SetUp folder and and run the `ikDataSetup.ps1` script with the param `install`.
  - Note: If an error of script permission throws, execute the next line to enable scripts. `Set-ExecutionPolicy Unrestricted`.

````PowerShell
.\ikDataSetup.ps1 install
````

## Uninstall

- Open Windows Powershell as Administrator and run the `ikDataSetup.ps1` script with the param `uninstall`

````PowerShell
.\ikDataSetup.ps1 uninstall
````