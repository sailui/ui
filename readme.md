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

Add `sailui` to your `tailwind.config.js` file:

```js
module.exports = {
  // ...
  plugins: [require("sailui")],
};
```

### Compatibility
| Tailwind CSS  | Sail UI |
| ------- | ------- |
| v1.9.0  | v0.4.0  |
| v2.0.0  | v0.5.0  |
| v3.0.0  | v0.6.0  |


## Usage

Start using Sail UI component classes just like how you're used to.

```html
<a href="/" class="btn"></a>
```

### Customizing the primary color

Simply add a `theme.colors.primary` key to your `tailwind.config.js` and Sail UI will use it as the default color
for all available components:

```js
module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        primary: "#ff6394",
      },
    },
  },
};
```

## What's Included

### Basic Components

These components are included:

- [.btn](#buttons)
- [.card](#cards)
- [.alert](#alerts)
- [.badge](#badges)
- [.link](#links)

#### Buttons

```html
<button class="btn">Sign Up</button>

<button class="btn btn-outline">Find Out More</button>
```

#### Cards

```html
<div class="card">Lorem ipsum dolor sit amet...</div>
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

#### Links

```html
<span>This is a <a href="#" class="link">link</a></span>.
```

### Forms

Sail UI uses the [`forms` plugin from Tailwind Labs](https://github.com/tailwindlabs/tailwindcss-forms)
to reset form styles.
 
On top of the provided reset, these classes add an additional layer of styling to form elements:

- [.form-input](#form-input)
- [.form-select](#form-select)
- [.form-radio](#form-radio)
- [.form-checkbox](#form-checkbox)
- [.form-textarea](#form-textarea)

#### Form Input

```html
<label class="block">
  <span class="text-gray-700">Name</span>
  <input type="text" class="form-input mt-1 block w-full" />
</label>
```

#### Form Select

```html
<label class="block">
  <span class="text-gray-700">Pet of Choice</span>
  <select class="form-select mt-1 block w-full">
    <option>Cat</option>
    <option>Catty</option>
    <option>Kitty</option>
    <option>Kat</option>
  </select>
</label>
```

#### Form Radio

```html
<div class="mt-4">
  <span class="text-gray-700">Age Group</span>
  <div class="mt-2">
    <label class="inline-flex items-center">
      <input type="radio" class="form-radio" name="age-group" value="cat" />
      <span class="ml-2">Cat</span>
    </label>
    <label class="inline-flex items-center ml-6">
      <input type="radio" class="form-radio" name="age-group" value="kitty" />
      <span class="ml-2">Kitty</span>
    </label>
  </div>
</div>
```

#### Form Checkbox

```html
<div class="flex mt-6">
  <label class="flex items-center">
    <input type="checkbox" class="form-checkbox" />
    <span class="ml-2">I agree to your <span class="underline">terms</span></span>.
  </label>
</div>
```

#### Form Textarea

```html
<label class="block mt-6">
  <span class="text-gray-700">Notes</span>
  <textarea class="form-textarea mt-1 block w-full" rows="3" placeholder="Write something..."></textarea>
</label>
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

### Container

The `mx-auto` style is automatically applied to center the default `.container` that comes out of the box with Tailwind.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
