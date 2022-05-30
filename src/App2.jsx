import "./App2.css";

const tasks = [
  {
    id: "unique-id-001",
    subtile: "subtile",
    createdAt: "2022-05-28T05:08:24.851Z",
    tags: [
      {
        id: "tag-id-001",
        text: "Its Done",
        icon: "T",
      },
      {
        id: "tag-id-002",
        text: "Its Cancelled",
        icon: "X",
      },
      {
        id: "tag-id-003",
        text: "Its in progress",
        icon: "P",
      },
      {
        id: "tag-id-004",
        text: "Just wrote this",
        icon: "C",
      },
    ],
    comments: [
      {
        id: "comment-id-001",
        user: {
          id: "user-id-001",
          name: "Ayyub Iqbal",
          avatar: "xyz.com/img.jpg",
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aspernatur vero atque neque aut non tenetur. Sint suscipit quaerat.",
      },
    ],
    tasks: [
      {
        id: "task-id-001",
        title: "Froggy Nelson",
        text: "Here to clean the streets of Hell's kitchen",
        status: "done",
      },
      {
        id: "task-id-002",
        title: "Louis CK",
        text: "This one is cancelled",
        status: "cancelled",
      },
      {
        id: "task-id-003",
        title: "Albert Eden",
        text: "Here to clean the streets of Hell's kitchen",
        status: "progress",
      },
      {
        id: "task-id-004",
        title: "Albert Einstein",
        text: "Here to clean the streets of Hell's kitchen",
        status: "progress",
      },
    ],
  },
  {
    id: "unique-id-002",
    subtile: "subtile",
    createdAt: "2022-05-28T05:08:24.851Z",
    tags: [
      {
        id: "tag-id-001",
        text: "Its Done",
        icon: "T",
      },
      {
        id: "tag-id-002",
        text: "Its Cancelled",
        icon: "X",
      },
      {
        id: "tag-id-003",
        text: "Its in progress",
        icon: "P",
      },
      {
        id: "tag-id-004",
        text: "Just wrote this",
        icon: "C",
      },
    ],
    comments: [
      {
        id: "comment-id-001",
        user: {
          id: "user-id-001",
          name: "Ayyub Iqbal",
          avatar: "xyz.com/img.jpg",
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aspernatur vero atque neque aut non tenetur. Sint suscipit quaerat.",
      },
    ],
    tasks: [
      {
        id: "task-id-001",
        title: "Froggy Nelson",
        text: "Here to clean the streets of Hell's kitchen",
        status: "done",
      },
      {
        id: "task-id-002",
        title: "Louis CK",
        text: "This one is cancelled",
        status: "cancelled",
      },
      {
        id: "task-id-003",
        title: "Albert Eden",
        text: "Here to clean the streets of Hell's kitchen",
        status: "progress",
      },
      {
        id: "task-id-004",
        title: "Albert Einstein",
        text: "Here to clean the streets of Hell's kitchen",
        status: "progress",
      },
    ],
  },
];

function getDay(dateStr) {
  const date = new Date(dateStr).getDay();
  const days = [
    "Sunday",
    "Monday",
    "TuesDay",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[date];
}

function formateDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

function TagListItem({ tag }) {
  return (
    <li>
      <small>{tag.icon}</small> - {tag.text}
    </li>
  );
}

function CommentListItem({ comment }) {
  return (
    <div className="comment-item" key={comment.id}>
      <h3>{comment.user.name}</h3>
      <p>{comment.text}</p>
    </div>
  );
}

function TaskListItem({ task }) {
  return (
    <li key={task.id}>
      <h3>{task.title}</h3>
      <p>
        <small>{task.status}</small>
      </p>
      <p>{task.text}</p>
    </li>
  );
}

const TaskCard = ({ task }) => (
  <div className="day-card">
    <h1 className="title">
      {getDay(task.createdAt)}, {formateDate(task.createdAt)}
    </h1>
    <h3 className="sub-title">{task.subtile}</h3>
    <ul className="tag-ul">
      {task.tags.map((tag) => (
        <TagListItem key={tag.id} tag={tag} />
      ))}
    </ul>
    <div className="line" />
    <p className="notes">Notes Linked to People</p>
    <div className="comments">
      {task.comments.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} />
      ))}
    </div>
    <ul className="tasks">
      {task.tasks.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </ul>
  </div>
);

const App = () => {
  return (
    <div className="cards-group">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default App;
