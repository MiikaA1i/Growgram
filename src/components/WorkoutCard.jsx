import React, { useState } from "react"
import Modal from "./Modal"
import { exerciseDescriptions } from "../utils"

export default function WorkoutCard(props) {
    const { trainingPlan, workoutIndex, type, dayNum, icon, savedWeights, handleSave, handleComplete } = props
    const [unit, setUnit] = useState("kg");
    const { warmup, workout } = trainingPlan || {}
    const [showExerciseDescription, setShowExerciseDescription] = useState(null)
    const [weights, setWeights] = useState(savedWeights || {})

    function convertValue(value, fromUnit) {
    if (!value) return ''

    const num = parseFloat(value)
    if (isNaN(num)) return ''

    if (fromUnit === "kg") {
        return (num * 2.20462).toFixed(1) // kg → lbs
    } else {
        return (num / 2.20462).toFixed(1) // lbs → kg
    }
}
    function handleToggleUnit() {
    const newUnit = unit === "kg" ? "lbs" : "kg"

    const convertedWeights = {}

    Object.keys(weights).forEach((key) => {
        convertedWeights[key] = convertValue(weights[key], unit)
    })

    setWeights(convertedWeights)
    setUnit(newUnit)
}
    function handleAddWeight(title, weight) {
        const newObj = {
            ...weights,
            [title]: weight
        }
        setWeights(newObj)
    }


    return (
        <div className="workout-container">
            {showExerciseDescription && (
                <Modal showExerciseDescription={showExerciseDescription} handleCloseModal={() => {
                    setShowExerciseDescription(null)
                }} />
            )}
            <div className="workout-card card">
                <div className="plan-card-header">
                    <p>Day {dayNum}</p>
                    {icon}
                </div>
                <div className="plan-card-header">
                    <h2><b>{type} Workout</b></h2>
                </div>
            </div>


            <div className="workout-grid">
                <div className="exercise-name">
                    <h4>Warmup</h4>
                </div>
                <h6>Sets</h6>
                <h6>Reps</h6>
                <h6 className="weight-input flex items-center gap-2">Max Weight ({unit})
                    <button type="button" onClick={handleToggleUnit} className="unit-toggle-btn">⇄</button>
                </h6>
                {warmup.map((warmupExercise, warmupIndex) => {
                    return (
                        <React.Fragment key={warmupIndex}>
                            <div className="exercise-name">
                                <p>{warmupIndex + 1}. {warmupExercise.name}</p>
                                <button onClick={() => {
                                    setShowExerciseDescription({
                                        name: warmupExercise.name,
                                        description: exerciseDescriptions[warmupExercise.name]
                                    })
                                }} className="help-icon">
                                    <i className="fa-regular fa-circle-question" />
                                </button>
                            </div>
                            <p className="exercise-info">{warmupExercise.sets}</p>
                            <p className="exercise-info">{warmupExercise.reps}</p>
                            <input className="weight-input" placeholder="N/A" disabled />
                        </React.Fragment>
                    )
                })}
            </div>

            <div className="workout-grid">
                <div className="exercise-name">
                    <h4>Workout</h4>
                </div>
                <h6>Sets</h6>
                <h6>Reps</h6>
                <h6 className="weight-input flex items-center gap-2">Max Weight ({unit})
                    <button type="button" onClick={handleToggleUnit} className="unit-toggle-btn">⇄</button>
                </h6>
                {workout.map((workoutExercise, wIndex) => {
                    return (
                        <React.Fragment key={wIndex}>
                            <div className="exercise-name">
                                <p>{wIndex + 1}. {workoutExercise.name}</p>
                                <button onClick={() => {
                                    setShowExerciseDescription({
                                        name: workoutExercise.name,
                                        description: exerciseDescriptions[workoutExercise.name]
                                    })
                                }} className="help-icon">
                                    <i className="fa-regular fa-circle-question" />
                                </button>
                            </div>
                            <p className="exercise-info">{workoutExercise.sets}</p>
                            <p className="exercise-info">{workoutExercise.reps}</p>
                            <input value={weights[workoutExercise.name] || ''} onChange={(e) => {
                                handleAddWeight(workoutExercise.name, e.target.value)
                            }} className="weight-input" placeholder="Enter weight" type="number" />
                        </React.Fragment>
                    )
                })}
            </div>


            <div className="workout-buttons">
                <button onClick={() => {
                    handleSave(workoutIndex, { weights })
                }}>Save & Exit</button>
                {workoutIndex !== 29 && (
                    <button onClick={() => {
                        handleComplete(workoutIndex, { weights })
                    }} disabled={Object.keys(weights).length !== workout.length}>Complete</button>
                )}
            </div>
        </div>
    )
}