# Sail UI
A collection of basic UI components built on Tailwind. 

![npm](https://img.shields.io/npm/v/sailui)
[![GitHub license](https://img.shields.io/github/license/sailui/ui)](https://github.com/sailui/ui/blob/master/LICENSE.md)

## Who's this for?
### Serial Users
If you're already using Tailwind and you find yourself repeatedly creating 
a few common component classes for every project, **Sail UI** is for you.

This package helps you with a few basic components, so that you can start 
building your prototype / draft / MVP before you get down to polishing your
fully custom design. 

Use `.btn`, `.card` and other classes you're familiar with to get you started and customize them later when you need to.  

### Newcomers
If you're moving away from another framework to Tailwind
and you're afraid of taking the leap because you don't want to
build all of those lovely components from scratch yourself, 
**Sail UI** will help you with the transition.   

## Installation
```bash
npm install sailui
```

Import the `sailui.css` file after your `@tailwind components` and before your `@tailwind components` directives.
```postcss
@tailwind base;

@import 'sailui/base.css';

@tailwind components;

@import 'sailui/components.css';

@tailwind utilities;
```

## Usage
Start using Sail UI component classes just like how you're used to.
```html
<a href="/" class="btn"></a>
```

## What's Included 
- Sensible default styles for headings, paragraphs, and other elements of typography. 
- Basic components:
```
.btn
.card
.alert
.badge
.input
.select
.field
.note
```

## License
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.