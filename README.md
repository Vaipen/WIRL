# WIRL

**WIRL is an Android app for mobile IRL live streaming.** Choose a camera, tune the picture, add on-screen browser widgets and send one stream to Twitch, YouTube, or another RTMP/RTMPS destination.

This repository hosts the WIRL website on GitHub Pages. The current landing page is a placeholder showing the WIRL wordmark centered in Geist. An Android APK will be added here for download when it is ready.

**Сначала на русском:** [Русская версия](#wirl-на-русском)

## Features

### Live streaming

- Connect a Twitch account using Twitch authorization. WIRL can retrieve the channel's stream key and view or edit stream details from the app, including title, category, language, tags, content labels and branded-content status.
- Stream to YouTube using its RTMP endpoint, or add a custom RTMP/RTMPS server and stream key.
- Send the stream to up to three destinations at once. Multiple destinations increase outgoing data use because each destination receives a copy of the stream.
- Choose the output resolution, frame rate and video bitrate. Available resolutions depend on the camera and device. The app can adjust bitrate while streaming when the connection changes.
- Use a dark Material 3 Expressive interface with Geist typography.

### Camera and picture

- Use Camera2 to select a physical camera lens where the phone exposes it: main, ultra-wide, macro and front camera.
- Adjust exposure compensation or manual shutter speed and ISO, focus, framing, torch and low-light frame-rate behavior, depending on camera support.
- WIRL requests Camera2 noise reduction to be off to preserve fine detail. The camera vendor may still apply image processing internally, so the final result can vary by phone.
- Lens changes use an animated transition, and camera controls are designed to respond smoothly during a live stream.
- Turn the camera off while live; the stream can show a selected still image in its place. Mute or unmute the microphone independently.

### On-screen widgets and chat

- Add secure HTTPS browser pages as stream overlays, such as DonationAlerts widgets. Position, size and rotate each overlay, set its viewport dimensions, and enable or hide it.
- Add the built-in Twitch chat as an overlay. Customize text size, message direction, text shadow and automatic message clearing. The chat displays messages, emotes and badges; it is read-only in the current implementation.

### Mobile data usage

- During a stream on cellular data, see the current upload rate, an approximate data-use-per-hour estimate, and total sent and received data for the session.
- The estimate is based on the observed upload rate. Actual usage can differ. The cellular-traffic panel is hidden on Wi-Fi.

## Camera compatibility

Ultra-wide access is **not Xiaomi-only**, but it is **not guaranteed on every Android phone** either. Android's Camera2 multi-camera APIs let manufacturers expose physical lenses, but the available cameras and their identifiers depend on the device and its software. WIRL currently includes camera IDs configured for the Redmi Note 12 4G and checks whether those IDs can be opened. Other phones may expose the ultra-wide lens differently and may need device-specific configuration. See the [Android multi-camera API documentation](https://developer.android.com/media/camera/camera2/multi-camera).

## Language

The README is available in English and Russian. In the current app build, most interface text is Russian; a complete English interface translation is not yet present. Twitch stream metadata includes Russian, English and other language options.

## Website and APK

- Website: [vaipen.github.io/WIRL](https://vaipen.github.io/WIRL/)
- Website source: `index.html`, published by GitHub Pages from the `main` branch and repository root.
- Android APK: to be added to this repository when a distributable build is ready.

---

# WIRL — на русском

**WIRL — приложение для Android для мобильных IRL-трансляций.** Выбирайте камеру, настраивайте изображение, добавляйте браузерные виджеты поверх видео и отправляйте трансляцию на Twitch, YouTube или любой другой RTMP/RTMPS-сервер.

Этот репозиторий используется для сайта WIRL на GitHub Pages. Пока на главной странице — заглушка: надпись WIRL шрифтом Geist по центру. APK приложения появится здесь, когда будет готов файл для скачивания.

## Возможности

### Прямые трансляции

- Подключение аккаунта Twitch через авторизацию Twitch. Приложение получает ключ трансляции канала и позволяет просматривать и менять её данные: название, категорию, язык, теги, метки контента и статус брендированного контента.
- Трансляция на YouTube через RTMP-адрес YouTube или на пользовательский RTMP/RTMPS-сервер с собственным ключом.
- Одновременная трансляция максимум на три адреса. Каждый адрес получает копию потока, поэтому с несколькими адресами растёт исходящий трафик.
- Настройка разрешения, частоты кадров и битрейта видео. Доступные разрешения зависят от камеры и телефона. Во время эфира приложение может менять битрейт при изменении состояния сети.
- Тёмный интерфейс Material 3 Expressive со шрифтом Geist.

### Камера и изображение

- Выбор физического объектива через Camera2, если телефон предоставляет к нему доступ: основная камера, ультраширокоугольная, макро и фронтальная.
- Настройка экспокоррекции или ручной выдержки и ISO, фокуса, кадрирования, вспышки-фонаря и частоты кадров для слабого освещения — в зависимости от возможностей камеры.
- WIRL отключает запрос Camera2 на шумоподавление, чтобы сохранить мелкие детали изображения. Производитель телефона может дополнительно обрабатывать изображение внутри камеры, поэтому итоговая картинка зависит от модели.
- При переключении объективов используется плавный переход; управление камерой рассчитано на отзывчивую работу во время эфира.
- Камеру можно выключить прямо во время эфира и заменить её изображение выбранной статичной картинкой. Микрофон можно включать и выключать независимо.

### Браузерные источники и чат

- Добавление защищённых HTTPS-страниц поверх видео — например, виджетов DonationAlerts. Для каждого источника можно настроить положение, размер, поворот и размеры области страницы, а также скрыть или включить его.
- Встроенный чат Twitch можно добавить поверх видео. Настраиваются размер текста, направление сообщений, тень текста и автоматическая очистка. Чат показывает сообщения, смайлы и значки; в текущей версии он работает только для чтения.

### Учёт мобильного трафика

- Во время эфира через мобильную сеть отображаются текущая скорость отправки, примерный расход трафика за час и общий объём отправленных и полученных данных за сессию.
- Прогноз расхода за час рассчитывается по текущей скорости передачи и может отличаться от фактического расхода. Карточка мобильного трафика скрывается при подключении к Wi-Fi.

## Совместимость камер

Доступ к ультраширокоугольной камере **не ограничен Xiaomi**, но **не гарантирован на каждом Android-телефоне**. Camera2 поддерживает работу с несколькими камерами, однако производитель и прошивка телефона определяют, какие объективы и идентификаторы доступны приложениям. Текущая версия WIRL настроена с идентификаторами камер Redmi Note 12 4G и проверяет, удаётся ли их открыть. На других моделях ультраширокоугольный объектив может иметь другие идентификаторы или быть недоступен через Camera2 без отдельной настройки. Подробнее — в [документации Android Camera2 Multi-Camera](https://developer.android.com/media/camera/camera2/multi-camera).

## Языки

README написан на русском и английском. В текущей версии приложения большая часть интерфейса на русском; полноценного английского перевода интерфейса пока нет. В настройках данных Twitch-трансляции можно выбрать русский, английский и другие языки.

## Сайт и APK

- Сайт: [vaipen.github.io/WIRL](https://vaipen.github.io/WIRL/)
- Исходник сайта — `index.html`; GitHub Pages публикует его из корня ветки `main`.
- APK Android-приложения будет добавлен в этот репозиторий, когда будет готов файл для распространения.
