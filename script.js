const app= new Vue({
    el:'#app',
    
    data:{
        todos:[
            {
                text:'ciao',
                done:'false',
            },
            {
                text:'ciao2',
                done:'false',
            },
            {
                text:'ciao3',
                done:'true',
            }
        ],
        newTodo:"",
    },

    methods:{
        removeToDo(index){
            this.todos.splice(index, 1);
        }, 

        addNewTodo(){
            const newTodoAdd={
                text:this.newTodo,
                done:false,
            };
            this.todos.push(newTodoAdd);
        },

        doLineThrough(index){
            this.todos[index].done= !this.todos[index].done;
        }
    }
})