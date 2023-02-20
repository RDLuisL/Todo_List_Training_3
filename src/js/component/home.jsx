import React, { useState } from "react";



//create your first component


const Home = () => {

// Primero declarar dos variables uno: la variable que captura el nombre de la tarea con useState,
// dos: el arreglo que va a guardar la lista de tareas y es la que va a mostrar.

	const [task,setTask]=useState("")

	const [tasklist,setTasklist]=useState([])

// Ahora dos funciones, uno: la funcion para grabar el contenido de input en task que es la que almacena el
// valor del task, la funcion debe de cargar la tarea en el tasklist, por ultimo debe reiniciar el valor
// del input a campo vacío.
	const load = (e)=>{e.preventDefault();
		// (e)=>{e.preventDefault(): previene que al refrescarse la pantalla no grabe en task la tarea
		// 	no se cargue en task
			setTasklist([...tasklist,task]);
		// setTasklist llama al arreglo con ... despliega las posiciones de tasklist para grabar los valores
		// de las tareas que atrapa en task
			setTask("")
	}
			//setTask("") luego de refrescar la pantalla inicializa el valor del imput en vacio
			const del =(indexItem)=>{

				setTasklist((prevItem)=>	
				prevItem.filter((item,index)=>index!==indexItem))
	
		}

// Funcion de borrar: del 

	return (
		<div className="text-center">
			<form type="submit" onSubmit={load}>
				<h1 className="text-center mt-5">Tareas</h1>
				<input type="text" className="text-center" placeholder="Ingrese la tarea" onChange={e=>(e.target.value)} value={task}/>
			</form>

		<ul>{tasklist.map((item,index)=>{
			return(<li key={index}>{item}<button onClick={()=>del(index)}>🗑️</button></li>)
		})}
		</ul>
		</div>
	);
};

export default Home;
// 24m20s