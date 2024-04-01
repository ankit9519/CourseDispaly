/* eslint-disable react/prop-types */
const CourseForm = ({ addCourse, setAddCourse, handleAddCourse }) => {
  return (
    <form
      onSubmit={handleAddCourse}
      className='w-1/3 bg-slate-200 p-5 flex flex-col ml-auto mr-auto mt-24 rounded-lg mb-10'
    >
      <h1 className='font-bold'>Course Goal</h1>
      <input
        type='text'
        value={addCourse}
        onChange={(e) => setAddCourse(e.target.value)}
        className='mt-2 h-8 p-2'
      />
      <button className='bg-red-400 rounded-lg p-2 mt-5'>Add Course</button>
    </form>
  );
};

export default CourseForm;
