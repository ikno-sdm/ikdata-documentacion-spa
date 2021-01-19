# IkData Windows 10 Installer <!-- omit in toc -->

![Ik-Data Logo](https://github.com/Ortega-Dan/IkData-Installers/blob/main/windowsInstaller/imgs/Ik-Data.png?raw=true)

- [Download requirements](#download-requirements)
  - [MySQL](#mysql)
    - [MySQL Installation](#mysql-installation)
- [Install](#install)
- [Update](#update)
- [Uninstall](#uninstall)

## Download requirements

### MySQL

Download `MySQL Installer 8.0.22` from [MySQL Community Downloads](https://dev.mysql.com/get/Downloads/MySQLInstaller/mysql-installer-web-community-8.0.22.0.msi)

#### MySQL Installation

1. Open `MySQL Installer 8.0.22` and select Custom option.

   - ![mysql-inst1](https://github.com/Ortega-Dan/IkData-Installers/blob/main/windowsInstaller/imgs/mysql-inst1.png)

1. In the Available Products select:

   - `MySQL Server 8.0.21`
   - `MySQL ODBC`
   - ![mysql-inst2](https://github.com/Ortega-Dan/IkData-Installers/blob/main/windowsInstaller/imgs/mysql-inst2.png)

1. Select Standalone option and continue with the installation.

   - ![mysql-inst3](https://github.com/Ortega-Dan/IkData-Installers/blob/main/windowsInstaller/imgs/mysql-inst3.png)

## Install

1. Run [`SetUp.EXE`](https://github.com/Ortega-Dan/IkData-Installers/releases/download/v1.0/SetUp.EXE) **As Admin**.

    - Read and accept the Terms and Conditions, then click on `Yes`.

    ![Ik-Data Terms and Conditions](https://github.com/Ortega-Dan/IkData-Installers/blob/WindowsGUI/windowsInstaller/GUISetup/ScreenShots/TermsAndConditions.png?raw=true)

1. In the main window, click on `Install`.

    ![Ik-Data Initial Form](https://github.com/Ortega-Dan/IkData-Installers/blob/WindowsGUI/windowsInstaller/GUISetup/ScreenShots/InitialForm.png?raw=true)

1. Now you can choose the path where you want to install Ik-Data, or use the default path. Then, click on `Next`.

    ![Ik-Data installation Path](https://github.com/Ortega-Dan/IkData-Installers/blob/WindowsGUI/windowsInstaller/GUISetup/ScreenShots/InstallOpt.png?raw=true)

1. In this windows, you can `Start` the download of dependencies and IkData files (This process may take time depending on your internet connection).

    ![IkData Download Form](https://github.com/Ortega-Dan/IkData-Installers/blob/WindowsGUI/windowsInstaller/GUISetup/ScreenShots/ProgressDownloads.png?raw=true)

    - When the download and installation finish, you can click on `Next`.

1. IkData uses a DataBase to many process, thats why you have to enter your MySQL root password to configure ikdata user. Click on `Next`

    ![IkData DB configure](https://github.com/Ortega-Dan/IkData-Installers/blob/WindowsGUI/windowsInstaller/GUISetup/ScreenShots/FormTestDB.png?raw=true)

1. Finally, the installation process concludes. Click `Finish` to close the window.

    ![IkData final form](https://github.com/Ortega-Dan/IkData-Installers/blob/WindowsGUI/windowsInstaller/GUISetup/ScreenShots/FormInstallationOK.png?raw=true)

## Update

- Run `SetUp.EXE` **As Admin**, if and update is available, the option `Update` will be visible.

    ![IkData Update](https://github.com/Ortega-Dan/IkData-Installers/blob/WindowsGUI/windowsInstaller/GUISetup/ScreenShots/FormRapairUpdateUnInstall.png?raw=true)

- If you click on `Update`, and advertisement windows show you. You can accept (`Yes`) or cancel (`No`).

    ![IkData Update-Adv](https://github.com/Ortega-Dan/IkData-Installers/blob/WindowsGUI/windowsInstaller/GUISetup/ScreenShots/FormUpdate-adv.png?raw=true)

- If you accept the update, the download form appear, there you can `Start` the download or `Cancel` the update.

    ![IkData Download Form](https://github.com/Ortega-Dan/IkData-Installers/blob/WindowsGUI/windowsInstaller/GUISetup/ScreenShots/ProgressDownloads.png?raw=true)

- When the update ends, the finish windows appear. Click `Finish` to close the window.

    ![IkData Update ends](https://github.com/Ortega-Dan/IkData-Installers/blob/WindowsGUI/windowsInstaller/GUISetup/ScreenShots/FormUpdate-Finish.png?raw=true)

## Uninstall

- Run `SetUp.EXE` **As Admin**, if IkData is installed, the option `Uninstall` will be visible.

    ![IkData Uninstall](https://github.com/Ortega-Dan/IkData-Installers/blob/WindowsGUI/windowsInstaller/GUISetup/ScreenShots/FormRapairUnInstall.png?raw=true)

- When you select `Uninstall`, and advertisement windows show you, Click `Yes` to continue.

    ![IkData Uninstall-Adv](https://github.com/Ortega-Dan/IkData-Installers/blob/WindowsGUI/windowsInstaller/GUISetup/ScreenShots/FormUninstall-adv.png?raw=true)

- When IkData is uninstalled, a second message let you choice between delete all IkData residual files.

    ![IkData Uninstall-Adv](https://github.com/Ortega-Dan/IkData-Installers/blob/WindowsGUI/windowsInstaller/GUISetup/ScreenShots/FormUninstall-adv2.png?raw=true)

- Finally, click Finish to close the window.