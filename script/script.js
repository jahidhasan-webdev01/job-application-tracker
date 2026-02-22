let allPostData = [
  {
    companyName: "Google",
    jobTitle: "Frontend Developer",
    location: "New York, USA",
    employmentType: "Full-time",
    salary: {
      min: "130,000",
      max: "175,000",
      currency: "$"
    },
    applicationStatus: "not applied",
    description: "Build and maintain modern React applications. Work with designers and backend teams to create fast and responsive user interfaces."
  },
  {
    companyName: "Microsoft",
    jobTitle: "Backend Engineer",
    location: "Seattle, USA",
    employmentType: "Full-time",
    salary: {
      min: "120,000",
      max: "165,000",
      currency: "$"
    },
    applicationStatus: "not applied",
    description: "Develop secure APIs and backend services using Node.js and Azure. Ensure performance, scalability, and data protection."
  },
  {
    companyName: "Amazon",
    jobTitle: "Full Stack Developer",
    location: "San Francisco, USA",
    employmentType: "Full-time",
    salary: {
      min: "110,000",
      max: "150,000",
      currency: "$"
    },
    applicationStatus: "not applied",
    description: "Work on frontend and backend features for scalable e-commerce platforms. Participate in testing and code reviews."
  },
  {
    companyName: "Meta",
    jobTitle: "React Native Developer",
    location: "Menlo Park, USA",
    employmentType: "Contract",
    salary: {
      min: "100,000",
      max: "140,000",
      currency: "$"
    },
    applicationStatus: "not applied",
    description: "Build cross-platform mobile apps using React Native. Optimize performance and integrate third-party APIs."
  },
  {
    companyName: "Netflix",
    jobTitle: "UI/UX Engineer",
    location: "Los Angeles, USA",
    employmentType: "Full-time",
    salary: {
      min: "125,000",
      max: "170,000",
      currency: "$"
    },
    applicationStatus: "not applied",
    description: "Create engaging user interfaces and improve user experience across web and mobile streaming platforms."
  },
  {
    companyName: "Spotify",
    jobTitle: "Software Engineer",
    location: "Stockholm, Sweden",
    employmentType: "Full-time",
    salary: {
      min: "115,000",
      max: "160,000",
      currency: "$"
    },
    applicationStatus: "not applied",
    description: "Develop backend systems for music streaming and recommendation services. Improve system scalability and performance."
  },
  {
    companyName: "Airbnb",
    jobTitle: "JavaScript Developer",
    location: "San Francisco, USA",
    employmentType: "Part-time",
    salary: {
      min: "90,000",
      max: "120,000",
      currency: "$"
    },
    applicationStatus: "not applied",
    description: "Build dynamic booking features using modern JavaScript frameworks. Optimize application speed and usability."
  },
  {
    companyName: "Tesla",
    jobTitle: "DevOps Engineer",
    location: "Austin, USA",
    employmentType: "Full-time",
    salary: {
      min: "135,000",
      max: "180,000",
      currency: "$"
    },
    applicationStatus: "not applied",
    description: "Manage CI/CD pipelines and cloud infrastructure. Ensure reliable and secure deployment processes."
  }
];
let interviewPostData = [];
let rejectedPostData = [];

let currentFilterTab = "all";

function renderJobPost(data) {
    const containerEl = document.querySelector("#all-job-post-container");
    containerEl.innerHTML = "";
    if (data.length > 0) {
        for (const jobPost of data) {
            const newPost = document.createElement("div");
            newPost.classList = "flex justify-between bg-white p-4 md:p-8  border border-gray-300 shadow rounded-2xl text-justify";
            newPost.innerHTML = `
                <div>
                    <h1 class="text-xl font-bold">${jobPost.companyName}</h1>
                    <p class="text-gray-600 mt-1">${jobPost.jobTitle}</p>

                    <div class="mt-4 md:flex gap-2 items-center text-gray-600 text-sm">
                        <p class="capitalize">${jobPost.location}</p>
                        <span class="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                        <p>${jobPost.employmentType}</p>
                        <span class="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                        <p>$${jobPost.salary.min} - $${jobPost.salary.max}</p>
                    </div>

                    <button class="mt-5 btn btn-xs 
                    ${jobPost.applicationStatus ===
                    "interview" ? "btn-success text-white" :
                    jobPost.applicationStatus ===
                        "rejected" ? "btn-error text-white" :
                        "btn-active"}  uppercase text-xs">${jobPost.applicationStatus}</button>

                    <p class="mt-4 text-gray-600 text-sm">${jobPost.description}</p>

                    <!-- Action buttons -->
                    <div class="mt-4 flex flex-wrap gap-2">
                        <button class="btn-interview btn btn-outline btn-success uppercase">Interview</button>
                        <button class="btn-rejected btn btn-outline btn-error uppercase">Rejected</button>
                    </div>
                </div>

                <!-- Post delete button -->
                <button class="btn-delete btn btn-circle md:p-6">
                    <i class="btn-delete fa-regular fa-trash-can md:fa-lg"></i>
                </button>
        `
            containerEl.appendChild(newPost);
        }
    } else {
        const emptyMessage = document.createElement("div");
        emptyMessage.classList = "flex flex-col gap-2 items-center justify-center text-center bg-white px-4 py-20 md:p-20 shadow rounded-2xl"
        emptyMessage.innerHTML = `
            <img class="w-20 h-20" src="./assests/jobs.png" alt="job">
            <h1 class="text-xl font-bold">No jobs available</h1>
            <p class="text-gray-500">Check back soon for new job opportunities</p>
        `

        containerEl.appendChild(emptyMessage);
    }
};

document.getElementById("filter-buttons")
    .addEventListener("click", function (event) {
        const clickedButton = event.target.classList;
        removeActiveDesign();
        if (clickedButton.contains("filter-all")) {
            currentFilterTab = "all";
            clickedButton.add("btn-info", "text-white");
            updateAvailability();
            renderJobPost(allPostData);
        } else if (clickedButton.contains("filter-interview")) {
            currentFilterTab = "interview";
            clickedButton.add("btn-info", "text-white");

            // update data
            updateDataSet();

            updateAvailability();
            renderJobPost(interviewPostData);
        } else if (clickedButton.contains("filter-rejected")) {
            currentFilterTab = "rejected";
            clickedButton.add("btn-info", "text-white");

            // update data
            updateDataSet();

            updateAvailability();
            renderJobPost(rejectedPostData);
        }
    });

function removeActiveDesign() {
    document.querySelector(".filter-all").classList.remove("btn-info", "text-white");
    document.querySelector(".filter-interview").classList.remove("btn-info", "text-white");
    document.querySelector(".filter-rejected").classList.remove("btn-info", "text-white");
}

function countApplicationStatus() {
    const countTotal = allPostData.length;
    const countInterview = allPostData.filter(data => data.applicationStatus === "interview").length;
    const countRejected = allPostData.filter(data => data.applicationStatus === "rejected").length;

    document.getElementById("count-total").innerText = countTotal;
    document.getElementById("count-interview").innerText = countInterview;
    document.getElementById("count-rejected").innerText = countRejected;
}

function updateAvailability() {
    document.getElementById("available-jobs").innerText = `${currentFilterTab === "interview" ? `${interviewPostData.length} of` : currentFilterTab === "rejected" ? `${rejectedPostData.length} of` : ""} ${allPostData.length} jobs`;
}

function updateDataSet() {
    // Filter data of status interview
    interviewPostData = allPostData.filter(post => post.applicationStatus === "interview");

    // Filter data of status rejected
    rejectedPostData = allPostData.filter(post => post.applicationStatus === "rejected");
}


renderJobPost(allPostData);
countApplicationStatus();
updateAvailability();

// Event Deligation (Interview - Rejected - Delete)
document.getElementById("all-job-post-container")
    .addEventListener("click", function (event) {
        const selectedEl = event.target.classList;
        const els = event.target.parentNode.parentNode;
        const companyName = els.querySelector("h1").innerText;

        if (selectedEl.contains("btn-interview")) {
            updateStatusInAllPost(companyName, "interview")
        } else if (selectedEl.contains("btn-rejected")) {
            updateStatusInAllPost(companyName, "rejected")
        } else if (selectedEl.contains("btn-delete")) {
            handleDelete(companyName)
        }
    })

function updateStatusInAllPost(companyNameQuery, newStatus) {
    const selectedJob = allPostData.find(jobPost => jobPost.companyName === companyNameQuery);

    if (selectedJob) {
        selectedJob.applicationStatus = newStatus;
    }

    if (currentFilterTab === "all") {
        renderJobPost(allPostData);
    } else if (currentFilterTab === "interview") {
        updateDataSet();
        renderJobPost(interviewPostData);
    } else if (currentFilterTab === "rejected") {
        updateDataSet();
        renderJobPost(rejectedPostData);
    }
    updateAvailability();
    countApplicationStatus();
}

function handleDelete(companyNameQuery) {
    allPostData = allPostData.filter((data) => data.companyName !== companyNameQuery);

    updateDataSet();
    updateAvailability();

    if (currentFilterTab === "all") {
        renderJobPost(allPostData);
    } else if (currentFilterTab === "interview") {
        updateDataSet();
        renderJobPost(interviewPostData);
    } else if (currentFilterTab === "rejected") {
        updateDataSet();
        renderJobPost(rejectedPostData);
    }

    countApplicationStatus();
}