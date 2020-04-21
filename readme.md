# Sail UI
A collection of basic UI components built on Tailwind. 

## Who's this for?
### Serial Users
If you're already using Tailwind and you find yourself repeatedly creating 
a few common component classes for every project, **Sail UI** is for you.

No more creating `.btn`, `.card` and `.form-control`.

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

@tailwind components;

@import '../node_modules/sailui/components.css';

@tailwind utilities;
```

## Usage
Start using Sail UI component classes just like how you're used to.
```html
<a href="/" class="btn"></a>
```

## List of Components
```
.btn
.card
.custom-select
```




## License
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.