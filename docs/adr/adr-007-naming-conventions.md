---
layout: default
title: ADR-007
parent: ADRs
description: Naming Conventions
---

## ADR-007: Naming Conventions

|              |                |
| ------------ | -------------- |
| Date         | `2024-05-22`   |
| Status       | `Decided`      |
| Deciders     | `Engineering`  |
| Significance | `Ross Buggins` |

- [ADR-007: Naming Conventions](#adr-007-naming-conventions)
- [Decision](#decision)

## Decision

Repositories, accounts and resources will follow the convention of:

`nhs-notify-[subdomain]-[microservice/library]`

This will be used for repository's, accounts, wherever we need to name our resources.

If linked to an environment:

`nhs-notify-[subdomain]-[microservice/library]-[envname]-[envtype]`

Public root repo:

`nhs-notify https://github.com/NHSDigital/nhs-notify`
