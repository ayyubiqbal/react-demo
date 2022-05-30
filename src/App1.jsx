// const ListItem = (props) => {
//   console.log(`props ${props}`);
//   return (
//     <li style={{ listStyle: "none", display: "flex", alignItems: "center" }}>
//       <input type="checkbox" checked={props.checked} />
//       <p>{props.text}</p>
//       <button style={{ marginLeft: "auto" }}>Delete</button>
//     </li>
//   )
// }

const taskList = [
  {
    id: 1,
    text: "Title - 1",
    checked: true
  },
  {
    id: 2,
    text: "Title - 2",
    checked: false
  },
  {
    id: 3,
    text: "Title - 3",
    checked: true
  },
  {
    id: 4,
    text: "Title - 4",
    checked: false
  },
  {
    id: 5,
    text: "Title - 5",
    checked: true
  },
]

function App() {

  return (
    <div>
      <ul>
        {/* <li style={{ listStyle: "none", display: "flex", alignItems: "center" }}>
          <input type="checkbox" checked={true} />
          <p>hello world</p>
          <button style={{ marginLeft: "auto" }}>Delete</button>
        </li> */}
        {
          taskList.map(() => {
            console.log("hello world");
            <li>Hello world</li>
          })
        }
      </ul>
    </div>
  )
}

export default App
