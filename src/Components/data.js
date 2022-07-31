export const data = {
  task: {
    "task-1": { id: "task-1", source: "/images/image1.jpg", title: "Borbie doll" },
    "task-2": { id: "task-2", source: "/images/image2.jpg", title: "Penquin" },
    "task-3": { id: "task-3", source: "/images/image3.jpg", title: "Cat" },
    "task-4": { id: "task-4", source: "/images/image4.png", title: "Bird" },
    "task-5": { id: "task-5", source: "/images/image5.png", title: "Panda" },
    "task-6": { id: "task-6", source: "/images/image6.jpg", title: "Butterfly" },
    "task-7": { id: "task-7", source: "/images/image7.jpg", title: "jerry" },
    "task-8": { id: "task-8", source: "/images/image8.png", title: "girl" },
  },
  columns:{
    'column-1': {
        id:'column-1',
        title:"First column",
        taskId:['task-1','task-2','task-3','task-4','task-5','task-6','task-7','task-8',]
    },
    'column-2': {
        id:'column-2',
        title:"Second column",
        taskId:[]
    },
    'column-3': {
        id:'column-3',
        title:"Third column",
        taskId:[]
    },

  },
  order:['column-1','column-2','column-3',],
};
