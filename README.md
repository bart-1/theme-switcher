# Theme Switcher

![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

This is the React's component (Typescript), that render a button and gives logic for changing theme (light/dark) for HTML attribute [data-theme:] and for Tailwindcss (by add/remove class "dark").

## Installation

Copy component into your React project.

## Usage

```javascript
import ThemeSwitcher from "../your_folder/ThemeSwitcher.tsx";

const YourComponent = () => {
  return (
    <>
      <ThemeSwitcher />
    </>
  );
};
```

You can change size directly in props. Default is "M" (30px), but you have option "S" (15px) or "L" (45px).

```javascript
import ThemeSwitcher from "../your_folder/ThemeSwitcher.tsx";

const YourComponent = () => {
  return (
    <>
      <ThemeSwitcher size="L" />
    </>
  );
};
```

Or you can change it inside component:

```javascript

[...]

  useEffect(() => {
    if (size === "S") setIconSize(15);
    if (size === "L") setIconSize(45);

  }, []);
[...]
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
