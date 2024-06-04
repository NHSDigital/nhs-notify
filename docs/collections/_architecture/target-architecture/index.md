---
title: Target architecture
description: Notify Application Stack Target Architecture
summary: Notify Application Stack Target Architecture
last_modified_date: 2024-03-06
author: Ross Buggins
parent: Architecture
---

## Table of contents

- [Table of contents](#table-of-contents)
- [Proposed target architecture](#proposed-target-architecture)
- [Architectural aims and goals](#architectural-aims-and-goals)
  - [Conceptual example boundaries](#conceptual-example-boundaries)

## Proposed target architecture

With focus on:

- distributed system
- Event Driven Architecture
- notify managed Event Bus for inter BC integration events
- interact with external EDA Event Bus' via subscribing to integration events
- separate datastore per bounded context
- multiple microservices per bounded context
- microservice is the smallest deployable unit

## Architectural aims and goals

### Conceptual example boundaries

{% drawio path="assets/diagrams/architecture/target-architecture/target-architecture.drawio" page_number=0 height=800 %}
