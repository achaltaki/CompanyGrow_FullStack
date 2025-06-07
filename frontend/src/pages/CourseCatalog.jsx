import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseCatalog = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('/api/courses')
      .then(res => setCourses(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Training Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map(course => (
          <div key={course._id} className="border rounded-xl p-4 shadow bg-white">
            <h3 className="font-semibold text-lg">{course.title}</h3>
            <p className="text-sm">{course.description}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCatalog;