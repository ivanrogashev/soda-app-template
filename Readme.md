# SDK для быстрой разработки мобильных приложений

## Использование

### == ПРОСТО ==

Чтобы просто использовать библиотеку скачайте `zip` архив, распакуйте и измените файл `index.html`

### == ПРАВИЛЬНО ==

Сделайте `fork`, измените шаблоны `main.swig`, `menu.swig` (добавить свои по вкусу) и соберите через команду.

```bash
  ./mkhtml
```

### == *`cordova`/ `phonegap`* ==

Для создания приложения выполните команды:

```bash
git clone git@github.com:soda-io/soda-app-template.git
cd ..
cordova create SODA com.domain.my  SODA # (1)
cd SODA
cordova platform add ios android
cp -R ../soda-app-template/* www
cordova serve ios
```

#### (1) Измените название или домен, если знаете как, иначе лучше оставить как есть

#### Предполагается что в системе корректно установлены [`cordova`](https://github.com/apache/cordova-cli), [`Xcode`](https://developer.apple.com/xcode/downloads/) и [`Android SDK`](https://developer.android.com/sdk/installing/index.html?pkg=tools)
*Если это не так, пропустите соответствующие шаги или установите библиотеки*

#### Внимание

- при первом запуске из консоли (`cordova run android`) могут возникнуть проблемы, которые нужно исправить руками.
- все иконки и загрузочный экран будут по умолчанию от `cordova`



## == ЗАВИСИМОСТИ ==

`stylus`, `swig`

## == ДОКУМЕНТАЦИЯ ==
- [меню](docs/menu.md)
- [стили](docs/styles.md)
- [цвета](docs/colors.md)
- [эффекты](docs/effects.md)



## == ЛИЦЕНЗИЯ ==

Copyright (c) 2014 SODA LABS

Данная лицензия разрешает лицам, получившим копию данного программного обеспечения и сопутствующей документации (в дальнейшем именуемыми «Программное Обеспечение»), безвозмездно использовать Программное Обеспечение без ограничений, включая неограниченное право на использование, копирование, изменение, добавление, публикацию, распространение, сублицензирование и/или продажу копий Программного Обеспечения, а также лицам, которым предоставляется данное Программное Обеспечение, при соблюдении следующих условий:


Указанное выше уведомление об авторском праве и данные условия должны быть включены во все копии или значимые части данного Программного Обеспечения.

ДАННОЕ ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ ПРЕДОСТАВЛЯЕТСЯ «КАК ЕСТЬ», БЕЗ КАКИХ-ЛИБО ГАРАНТИЙ, ЯВНО ВЫРАЖЕННЫХ ИЛИ ПОДРАЗУМЕВАЕМЫХ, ВКЛЮЧАЯ ГАРАНТИИ ТОВАРНОЙ ПРИГОДНОСТИ, СООТВЕТСТВИЯ ПО ЕГО КОНКРЕТНОМУ НАЗНАЧЕНИЮ И ОТСУТСТВИЯ НАРУШЕНИЙ, НО НЕ ОГРАНИЧИВАЯСЬ ИМИ. НИ В КАКОМ СЛУЧАЕ АВТОРЫ ИЛИ ПРАВООБЛАДАТЕЛИ НЕ НЕСУТ ОТВЕТСТВЕННОСТИ ПО КАКИМ-ЛИБО ИСКАМ, ЗА УЩЕРБ ИЛИ ПО ИНЫМ ТРЕБОВАНИЯМ, В ТОМ ЧИСЛЕ, ПРИ ДЕЙСТВИИ КОНТРАКТА, ДЕЛИКТЕ ИЛИ ИНОЙ СИТУАЦИИ, ВОЗНИКШИМ ИЗ-ЗА ИСПОЛЬЗОВАНИЯ ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ ИЛИ ИНЫХ ДЕЙСТВИЙ С ПРОГРАММНЫМ ОБЕСПЕЧЕНИЕМ..

