"""SmartHomeOne Home Assistant integration and sidebar panel."""

from pathlib import Path

from homeassistant.components import frontend, panel_custom
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .const import DOMAIN, PANEL_MODULE, PANEL_URL, STATIC_PATH

_STATIC_REGISTERED = f"{DOMAIN}_static_registered"


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Register the SmartHomeOne sidebar panel."""
    if not hass.data.get(_STATIC_REGISTERED):
        panel_dir = Path(__file__).parent / "www"
        await hass.http.async_register_static_paths(
            [StaticPathConfig(STATIC_PATH, str(panel_dir), False)]
        )
        hass.data[_STATIC_REGISTERED] = True

    frontend.async_remove_panel(hass, PANEL_URL, warn_if_unknown=False)
    await panel_custom.async_register_panel(
        hass,
        frontend_url_path=PANEL_URL,
        webcomponent_name="smarthomeone-panel",
        sidebar_title="SmartHomeOne",
        sidebar_icon="mdi:home-assistant",
        module_url=PANEL_MODULE,
        config={},
        require_admin=False,
    )
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Remove the sidebar panel when the integration is unloaded."""
    frontend.async_remove_panel(hass, PANEL_URL, warn_if_unknown=False)
    return True
