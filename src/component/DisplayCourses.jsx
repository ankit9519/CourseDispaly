/* eslint-disable react/prop-types */
const DisplayCourses = ({ courses, handleDivClick }) => {
  return (
    <div>
      {courses.map((course, index) => (
        <div
          className='bg-slate-200 mt-5 w-1/3 ml-auto mr-auto p-5 rounded-lg'
          key={index}
          onClick={() => handleDivClick(course.name)}
        >
          {course.name}
        </div>
      ))}
    </div>
  );
};

export default DisplayCourses;
