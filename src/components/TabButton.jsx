export default function TabButton({title, onSelect}) {
    return(
      <li>
        <button onClick={onSelect}>{title}</button>
      </li>
    );
  }

//onSelect is customized trigger - This prop is used to define a callback function
//OnClick is fixed trigger - listener is a built-in event handler to detect when an element is clicked.

//export default function TabButton({title, onSelect})
//<button onClick={onSelect}>{title}</button>