import { useState } from "react";
import CourseForm from "./component/CourseForm";
import DisplayCourses from "./component/DisplayCourses";

const DemoCourse = [
  {
    name: "ReactJS",
  },
];

const App = () => {
  const [courses, setCourses] = useState(DemoCourse);
  const [addCourse, setAddCourse] = useState("");

  function handleAddCourse(e) {
    e.preventDefault();
    const name = addCourse; // Use the addCourse state to get the course name
    setCourses((c) => [...c, { name }]); // Add a new course object to the courses array
    setAddCourse(""); // Reset the addCourse state
  }

  function handleDivClick(name) {
    setCourses((prevCourses) => prevCourses.filter((c) => c.name !== name));
  }

  return (
    <div>
      <CourseForm
        addCourse={addCourse}
        setAddCourse={setAddCourse}
        handleAddCourse={handleAddCourse}
      />
      <DisplayCourses courses={courses} handleDivClick={handleDivClick} />
    </div>
  );
};

export default App;
