---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Home
nav_order: 1
---

[![CI/CD Pull Request](https://github.com/NHSDigital/nhs-notify/actions/workflows/jekyll-gh-pages.yml/badge.svg)](https://github.com/NHSDigital/nhs-notify/actions/workflows/jekyll-gh-pages.yml)

NHS Notify - for the NHS Notify web site, onboarding guidance, and customer support, please visit the [NHS Service Catalogue](https://digital.nhs.uk/services/nhs-notify).

## Related Repos

- [nhs-notify](https://nhsdigital.github.io/nhs-notify)
- [nhs-notify-dns](https://nhsdigital.github.io/nhs-notify-dns)

## Who/what is this repository is for?

- NHS Developers working on NHS Notify
- Those who are interested in NHS Notify architecture and how it is developed.

## Who/what is this repository **not** for?

- Customer Support
- Supplier Support

## What this repo contains

- High level developer documentation for source code location, and build process.
- Acts as the "root" for all separate public NHS Notify repositories.

## What this repo does not contain

- Any configuration of details of the Deployment phases or infrastructure of the NHS Notify Platform.

## Table of Contents

- [Related Repos](#related-repos)
- [Who/what is this repository is for?](#whowhat-is-this-repository-is-for)
- [Who/what is this repository **not** for?](#whowhat-is-this-repository-not-for)
- [What this repo contains](#what-this-repo-contains)
- [What this repo does not contain](#what-this-repo-does-not-contain)
- [Table of Contents](#table-of-contents)
- [Documentation](#documentation)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Configuration](#configuration)
- [Contributing](#contributing)
- [Licence](#licence)

## Documentation

- [Built](https://nhsdigital.github.io/nhs-notify/)
- [Source](/docs/README.md)

## Setup

Clone the repository

```shell
git clone https://github.com/NHSDigital/nhs-notify.git
cd nhs-notify
code project.code-workspace
```

### Prerequisites

The following software packages, or their equivalents, are expected to be installed and configured:

- [Docker](https://www.docker.com/) container runtime or a compatible tool, e.g. [Podman](https://podman.io/),
- [asdf](https://asdf-vm.com/) version manager,
- [GNU make](https://www.gnu.org/software/make/) 3.82 or later,
- [GNU coreutils](https://www.gnu.org/software/coreutils/) and [GNU binutils](https://www.gnu.org/software/binutils/) may be required to build dependencies like Python, which may need to be compiled during installation. For macOS users, this has been scripted and automated by the `dotfiles` project; please see this [script](https://github.com/nhs-england-tools/dotfiles/blob/main/assets/20-install-base-packages.macos.sh) for details,
- [Python](https://www.python.org/) required to run Git hooks,
- [`jq`](https://jqlang.github.io/jq/) a lightweight and flexible command-line JSON processor.

> [!NOTE]<br>
> The version of GNU make available by default on macOS is earlier than 3.82. You will need to upgrade it or certain `make` tasks will fail. On macOS, you will need [Homebrew](https://brew.sh/) installed, then to install `make`, like so:
>
> ```shell
> brew install make
> ```
>
> You will then see instructions to fix your `$PATH` variable to make the newly installed version available. If you are using [dotfiles](https://github.com/nhs-england-tools/dotfiles), this is all done for you.

### Configuration

Installation and configuration of the toolchain dependencies (including pre git hooks).

```shell
make config
```

## Contributing

Describe or link templates on how to raise an issue, feature request or make a contribution to the codebase. Reference the other documentation files, like

- Environment setup for contribution, i.e. `CONTRIBUTING.md`

## Licence

Unless stated otherwise, the codebase is released under the MIT License. This covers both the codebase and any sample code in the documentation.

Any HTML or Markdown documentation is [© Crown Copyright](https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/) and available under the terms of the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).
