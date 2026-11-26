# Device support in SmartHomeOne

SmartHomeOne provides a brand-focused setup panel and a common view of the entities created by Home Assistant integrations. Home Assistant handles vendor credentials, discovery, device commands, and camera streaming.

## Add the SmartHomeOne panel

SmartHomeOne requires Home Assistant 2026.11 or newer.

1. In Home Assistant, open **Settings > Marketplace**.
2. Choose **Add from link** and enter `https://github.com/TE99SJM/SmartHomeOne`.
3. Install **SmartHomeOne** from the Marketplace.
4. Open **Settings > Devices & services > Add integration**, choose **SmartHomeOne**, and submit the setup form.
5. Select **SmartHomeOne** in the sidebar.

The panel has brand-specific setup buttons and lists the entities exposed by connected integrations. Marketplace may request a restart after integration updates.

## Supported setup paths

| Brand | Setup in SmartHomeOne | Requirements and limits |
| --- | --- | --- |
| Owlet cameras | Install [ha-owlet-cam](https://github.com/ohlsont/ha-owlet-cam), then use **Add device** in the Owlet card. | Unofficial, pre-release community software. The embedded path is validated only for Owlet Cam 1 on AArch64 Home Assistant Yellow and requires a private application package. Other architectures or cameras need a compatible external bridge; those paths have not all passed real-device validation. |
| Night Owl cameras | Use **Add with ONVIF** or **Add stream URL**. | Works only when the camera/NVR exposes ONVIF Profile S or a reachable stream URL such as RTSP. Models and DVR/NVR setups vary. ONVIF requires the Home Assistant FFmpeg integration and a compatible H.264 profile. |
| Hubspace devices | Install the community [Hubspace integration](https://github.com/Emkraan/homeassistant-hubspace), then use **Add device** in the Hubspace card. | Unofficial cloud integration; requires Hubspace account access and an internet connection. |
| Leviton devices | Use **Add Decora Wi-Fi** for supported devices, or **Add Z-Wave device** for a prepared Z-Wave setup. | Decora Wi-Fi uses the My Leviton API and supports specific models. Z-Wave products require a compatible controller and configured Z-Wave JS server. |

Other Home Assistant entities appear automatically in **Connected devices** when their integration exposes a supported entity type.

## Compatibility details

The brand name alone cannot guarantee that every model connects. The setup panel routes to maintained Home Assistant integrations and standards-based camera setup. It does not bypass vendor account requirements, add missing camera protocols, or make incompatible firmware compatible.

For the exact current model lists and setup requirements, use the linked integration documentation. Community integrations are maintained independently and may change or stop working.
