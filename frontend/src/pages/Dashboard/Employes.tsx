import React, { useEffect, useState } from "react"
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd"
import { useAppDispatch } from "../../store"
import { IEmploye } from "./Employe.model"
import { deleteEmploye, updateAllEmployes } from "./Employes.hook"
import { toast } from "react-toastify";
import "./Dashboard.css"


const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    padding: 10,
    margin: `0 50px 15px 50px`,
    background: isDragging ? "#DCDCDC" : "white",
    color: isDragging ? "black" : "black",
    border: `1px solid black`,
    fontSize: `20px`,
    borderRadius: `5px`,
    display: `flex`,
    paddingLeft: '30px',

    ...draggableStyle

})


const Employes = (emp: any) => {
    const dispatch = useAppDispatch()
    const [employeList, setEmployeList] = useState(emp.emp)

    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result
        console.log("source", source)
        console.log("destination", destination)
        if (!destination) return
        const items = Array.from(employeList)
        const [newOrder] = items.splice(source.index, 1)
        items.splice(destination.index, 0, newOrder)

        setEmployeList(items)

    }
    useEffect(() => {
        console.log(employeList)
    }, [employeList])
    const onSave = () => {
        dispatch(updateAllEmployes(employeList))
        toast.success("Employes order is saved")
    }


    return (
        <div className="Employes">
            <div className="table-header">

                <div className="employe-element" style={{ width: "10%" }}> Name </div>

                <div className="employe-element" style={{ width: "15%" }}> Lastname </div>

                <div className="employe-element" style={{ width: "10%" }}>  Age  </div>

                <div className="employe-element" style={{ width: "15%" }}>   Departement </div>

                <div className="employe-element" style={{ width: "15%", textAlign: 'center' }}>   Grade </div>

                <div className="employe-element" style={{ width: "20%", textAlign: 'center' }}>   Profession  </div>

                <button className="btn"
                    style={{
                        width: "10%",
                        padding: "5px",
                        border: "1px solid white",
                        background: "black",
                        color: "white"
                    }}
                    onClick={onSave}>
                    Save
                </button>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="employeList">
                    {(provided) => (
                        <div className="todo" {...provided.droppableProps} ref={provided.innerRef}>
                            {employeList.map((employe: IEmploye, index: any) => {
                                return (
                                    <Draggable key={employe._id?.toString() || ''} draggableId={employe._id?.toString() || ''} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                            >
                                                <div className="employe-element" style={{ width: "10%" }}>   {employe.name} </div>

                                                <div className="employe-element" style={{ width: "15%" }}>   {employe.lastname}  </div>

                                                <div className="employe-element" style={{ width: "10%" }}>   {employe.age}  </div>

                                                <div className="employe-element" style={{ width: "15%" }}>   {employe.departement} </div>

                                                <div className="employe-element" style={{ width: "15%", textAlign: 'center' }}>   {employe.grade} </div>

                                                <div className="employe-element" style={{ width: "20%", textAlign: 'center' }}>   {employe.profession}  </div>

                                                <button className="btn"
                                                    style={{
                                                        width: "10%",
                                                        padding: "5px",
                                                        border: "1px solid red",
                                                        background: "white",
                                                        color: "red"
                                                    }}
                                                    onClick={() => dispatch(deleteEmploye(employe._id))}>
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </Draggable>
                                )
                            })}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default Employes

