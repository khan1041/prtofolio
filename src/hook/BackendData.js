
// This file simulates a simple RESTful API for managing projects.
// It is NOT a real server but provides an asynchronous interface for your React components.

// --- MOCK DATABASE STATE ---
let projects = [
  { id: 1, title: 'Portfolio Website', stack: 'React, Tailwind CSS', completed: true },
  { id: 2, title: 'E-commerce API', stack: 'Node.js, Express, MongoDB', completed: false },
  { id: 3, title: 'Data Visualization Dashboard', stack: 'D3.js, Python, Flask', completed: false },
  { id: 4, title: 'Mobile App Prototype', stack: 'React Native, Firebase', completed: true },
  { id: 5, title: 'Personal Blog CMS', stack: 'Next.js, Headless CMS', completed: false },
];

const API_DELAY = 400; // Simulate network latency

// --- UTILITY: SIMULATE API CALL DELAY ---
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


// ########################################################################
// #                      C R U D   O P E R A T I O N S                     #
// ########################################################################

/**
 * READ (GET /api/projects)
 * @returns {Promise<Array>} A promise that resolves with the current list of projects.
 */
export const getProjects = async () => {
  await delay(API_DELAY);
  console.log('[API: READ] Projects fetched successfully.');
  // Return a fresh copy to prevent accidental mutation of the internal state
  return [...projects]; 
};


/**
 * CREATE (POST /api/projects)
 * @param {Object} newProjectData - { title: string, stack: string }
 * @returns {Promise<Object>} A promise that resolves with the newly created project (including ID).
 */
export const createProject = async (newProjectData) => {
  await delay(API_DELAY);
  
  if (!newProjectData.title) {
    throw new Error("Project title is required.");
  }

  const newId = Math.max(...projects.map(p => p.id), 0) + 1;
  const newProject = { 
    id: newId, 
    ...newProjectData, 
    completed: false // Default completion status
  };
  
  projects.push(newProject);
  console.log(`[API: CREATE] Project #${newId} added.`);
  return newProject;
};


/**
 * UPDATE (PUT /api/projects/:id)
 * @param {number} id - The ID of the project to update.
 * @param {Object} updatedFields - The fields to update (e.g., { completed: true }).
 * @returns {Promise<Object>} A promise that resolves with the updated project object.
 */
export const updateProject = async (id, updatedFields) => {
  await delay(API_DELAY);
  
  const index = projects.findIndex(p => p.id === id);
  
  if (index === -1) {
    throw new Error(`Project with ID ${id} not found.`);
  }

  // Merge existing project data with new fields
  projects[index] = { ...projects[index], ...updatedFields };
  
  console.log(`[API: UPDATE] Project #${id} modified.`);
  return projects[index];
};


/**
 * DELETE (DELETE /api/projects/:id)
 * @param {number} id - The ID of the project to delete.
 * @returns {Promise<number>} A promise that resolves with the ID of the deleted project.
 */
export const deleteProject = async (id) => {
  await delay(API_DELAY);
  
  const initialLength = projects.length;
  projects = projects.filter(p => p.id !== id);
  
  if (projects.length === initialLength) {
    throw new Error(`Project with ID ${id} not found for deletion.`);
  }
  
  console.log(`[API: DELETE] Project #${id} removed.`);
  return id;
};

// ########################################################################

// Default export (This file exports utility functions, so the default can be null)
const Backend = () => null; 
export default Backend;