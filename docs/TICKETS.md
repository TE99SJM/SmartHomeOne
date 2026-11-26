# Work tickets

## Ticket 1 — Establish the product and integration boundary

**Status:** Complete

- Define Home Assistant as the integration and control engine.
- State how product compatibility depends on integrations, standards, and coordinators.

**Acceptance:** SPEC and ARCHITECTURE use one consistent integration-first approach.

## Ticket 2 — Add a persistent local Docker foundation

**Status:** Complete

- Add a Compose service for Home Assistant Container.
- Persist configuration in a host directory.
- Use host networking for local discovery.
- Ignore generated state and secrets in Git.

**Acceptance:** The repo documents one command to start Home Assistant and where to open it.

## Ticket 3 — Confirm first camera connection

**Status:** In progress

- Add the user's Owlet camera through the SmartHomeOne guided flow or a compatible local stream.
- Confirm browser playback through Home Assistant on the home network.

**Acceptance:** A live camera view opens from the PC on the home network. This requires a compatible camera model and installation path.

## Ticket 4 — Add SmartHomeOne panel and brand onboarding

**Status:** Implemented; runtime validation pending

- Install SmartHomeOne through the Home Assistant Marketplace.
- Provide setup paths for Owlet, Night Owl, Hubspace, and Leviton.
- List entity state from connected integrations.
- Document compatibility requirements and community software.

**Acceptance:** Each brand card starts or links to its installation path, and connected entities are visible.

## Ticket 5 — Expand the SmartHomeOne device dashboard

**Status:** Planned

- Add entity controls, room grouping, and device-type views.
- Keep Home Assistant responsible for authentication and device commands.
- Add each new brand through metadata-driven onboarding when possible.

**Acceptance:** Users can view and control supported devices in SmartHomeOne after adding the integration once.
