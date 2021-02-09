---
layout: default
title: {{ site.name }}
---
<!-- markdownlint-disable headings -->
<!-- markdownlint-disable no-inline-html -->

# IkData Ubuntu Installer <!-- omit in toc -->

<div class="toc" markdown="1">

## Tabla de Contenido<!-- omit in toc -->

- [Install](#install)
- [Use](#use)
- [Uninstall](#uninstall)

</div>

## Install

1. Copy the `ikdataRunner` folder to `home` of the current user.

    Eg. /home/myUserName/ikdataRunner.

2. Run `ikDataSetup.sh` with the argument `install`.

````shell
./ikDataSetup.sh install
````

## Use

In a web browser (Recommended: Microsoft Edge, Mozilla Firefox or Google Chrome) open [IkData](http://localhost:8023).

## Uninstall

Run `ikDataSetup.sh` with the argument `install`.

````shell
./ikDataSetup.sh uninstall
````
