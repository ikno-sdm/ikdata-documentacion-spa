---
layout: default
title: {{ site.name }}
---
<!-- markdownlint-disable headings -->
<!-- markdownlint-disable no-inline-html -->

# IkData Windows 10 Installer <!-- omit in toc -->

<div class="toc" markdown="1">

## Tabla de Contenido<!-- omit in toc -->

- [Requirements](#requirements)
  - [MySQL](#mysql)
- [Install](#install)
- [Update](#update)
- [Uninstall](#uninstall)

</div>

## Requirements

Ik-Data needs to have a database connection, the supported options are: MySQL, PostgresSQL, SQL Server and Oracle.

By default the database connections is with MySQL, if you need to change it:

1. Go to the Ik-Data installation path
2. Enter to the folder `WindowsServer`
    >Note: For Linux, the folder is `ikdataRunner`

3. Open the file `application.properties`
4. Look for the section `Supported SQL Databases`
5. Uncomment the line with the database connection you need.
    >Warning: This changes will be done with Ik-Data server stopped.

6. Run the Ik-Data server.

<details open>
<summary>Basic MySQL Installation</summary>
<div markdown='1'>

### MySQL

1. Download `MySQL Installer 8.0.22` from [MySQL Community Downloads](https://dev.mysql.com/get/Downloads/MySQLInstaller/mysql-installer-web-community-8.0.22.0.msi)

2. Open `MySQL Installer 8.0.22` and select Custom option.

   ![mysql-inst1](imgs/mysql-inst1.png)

3. In the Available Products select:

   - `MySQL Server 8.0.21`
   - `MySQL ODBC`

   ![mysql-inst2](imgs/mysql-inst2.png)

4. Select Standalone option and continue with the installation.

   ![mysql-inst3](imgs/mysql-inst3.png)

</div>
</details>

---

## Install

1. Run `SetUp.EXE` **As Admin**.

    - Read and accept the Terms and Conditions, then click on `Yes`.

    ![Ik-Data Terms and Conditions](imgs/ScreenShots/TermsAndConditions.png?raw=true)

1. In the main window, click on `Install`.

    ![Ik-Data Initial Form](imgs/ScreenShots/InitialForm.png?raw=true)

1. Now you can choose the path where you want to install Ik-Data, or use the default path. Then, click on `Next`.

    ![Ik-Data installation Path](imgs/ScreenShots/InstallOpt.png?raw=true)

1. In this windows, you can `Start` the download of dependencies and IkData files (This process may take time depending on your internet connection).

    ![IkData Download Form](imgs/ScreenShots/ProgressDownloads.png?raw=true)

    - When the download and installation finish, you can click on `Next`.

1. IkData uses a DataBase to many process, thats why you have to enter your MySQL root password to configure ikdata user. Click on `Next`

    ![IkData DB configure](imgs/ScreenShots/FormTestDB.png?raw=true)

1. Finally, the installation process concludes. Click `Finish` to close the window.

    ![IkData final form](imgs/ScreenShots/FormInstallationOK.png?raw=true)

## Update

- Run `SetUp.EXE` **As Admin**, if and update is available, the option `Update` will be visible.

    ![IkData Update](imgs/ScreenShots/FormRapairUpdateUnInstall.png?raw=true)

- If you click on `Update`, and advertisement windows show you. You can accept (`Yes`) or cancel (`No`).

    ![IkData Update-Adv](imgs/ScreenShots/FormUpdate-adv.png?raw=true)

- If you accept the update, the download form appear, there you can `Start` the download or `Cancel` the update.

    ![IkData Download Form](imgs/ScreenShots/ProgressDownloads.png?raw=true)

- When the update ends, the finish windows appear. Click `Finish` to close the window.

    ![IkData Update ends](imgs/ScreenShots/FormUpdate-Finish.png?raw=true)

## Uninstall

- Run `SetUp.EXE` **As Admin**, if IkData is installed, the option `Uninstall` will be visible.

    ![IkData Uninstall](imgs/ScreenShots/FormRapairUnInstall.png?raw=true)

- When you select `Uninstall`, and advertisement windows show you, Click `Yes` to continue.

    ![IkData Uninstall-Adv](imgs/ScreenShots/FormUninstall-adv.png?raw=true)

- When IkData is uninstalled, a second message let you choice between delete all IkData residual files.

    ![IkData Uninstall-Adv](imgs/ScreenShots/FormUninstall-adv2.png?raw=true)

- Finally, click Finish to close the window.
