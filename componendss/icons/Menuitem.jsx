export function Menuitems({ items }) {
  return (
    <div className="hidden md:flex items-center justify-end flex-1">
      <a className="px-2 py4" href="{items.[0].link}">
        {items[0].label}
      </a>
      <a className="px-2 py4 " href="{items.[0].link}">
        {items[1].label}
      </a>
      <a className="px-2 py4 " href="{items.[0].link}">
        {items[2].label}
      </a>
      <a className="px-2 py4 " href="{items.[0].link}">
        {items[3].label}
      </a>
    </div>
  );
}
