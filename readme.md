# Sail UI
[![npm](https://img.shields.io/npm/v/sailui)](https://www.npmjs.com/package/sailui)
[![GitHub license](https://img.shields.io/github/license/sailui/ui)](https://github.com/sailui/ui/blob/master/LICENSE.md)

A collection of basic UI components built on Tailwind CSS. 

[Demo](https://sailui.github.io/).

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
### Basic Components
These components are included:

- [.btn](#buttons)  
- [.input](#input)  
- [.select](#select)  
- [.field](#input)  
- [.note](#input)  
- [.card](#cards)  
- [.alert](#alerts)  
- [.badge](#badges)  

#### Buttons
```html
<button class="btn">Sign Up</button>

<button class="btn btn-outline">Find Out More</button>
```

#### Input
```html
<div class="field">
    <label for="email">Email</label>

    <input type="text" class="input" placeholder="johnny@example.com" id="email">

    <div class="note">We won't send you spam.</div>
</div>
```

#### Select
```html
<div class="field">
    <label for="category">Category</label>

    <select class="input select" id="category">
        <option>Best Customer</option>
        <option>Bester Customer</option>
        <option>Bestest Customer</option>
    </select>
</div>
```

#### Cards
```html
<div class="card">
    Lorem ipsum dolor sit amet...
</div>
```

#### Alerts
```html
<div class="alert">
    <strong>Normal stuff!</strong> zero concerns.
</div>

<div class="alert alert-blue">
    <strong>All is clear!</strong> So far so good.
</div>

<div class="alert alert-green">
    <strong>Fantastic!</strong> You did it.
</div>

<div class="alert alert-yellow">
    <strong>Watch out!</strong> Things are going down south.
</div>

<div class="alert alert-red">
    <strong>Too late!</strong> It's hit the fan.
</div>
```

#### Badges
```html
<span class="badge">Default</span>

<span class="badge badge-light">Light</span>

<span class="badge badge-blue">Blue</span>

<span class="badge badge-green">Green</span>

<span class="badge badge-yellow">Yellow</span>

<span class="badge badge-red">Red</span>
```

### Typography
Sensible default styles are applied to headings, paragraphs, and other elements of typography. 
These are the covered elements:

- h1
- h2
- h3
- h4
- h5
- h6
- p
- label


### Container
The `mx-auto` style is automatically applied to center the default `.container` that comes out of the box with Tailwind. 

## License
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.