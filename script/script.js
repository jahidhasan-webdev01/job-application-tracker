let allPostData = [
    {
        companyName: "Google",
        jobTitle: "Frontend Developer",
        workType: "remote",
        employmentType: "Full-time",
        salary: {
            min: "130,000",
            max: "175,000",
            currency: "$"
        },
        applicationStatus: "not applied",
        description: "Develop and maintain scalable frontend applications using React and TypeScript."
    },
    {
        companyName: "Microsoft",
        jobTitle: "Backend Engineer",
        workType: "hybrid",
        employmentType: "Full-time",
        salary: {
            min: "120,000",
            max: "165,000",
            currency: "$"
        },
        applicationStatus: "interview",
        description: "Build secure and high-performance APIs using Node.js and Azure cloud services."
    },
    {
        companyName: "Amazon",
        jobTitle: "Full Stack Developer",
        workType: "onsite",
        employmentType: "Full-time",
        salary: {
            min: "110,000",
            max: "150,000",
            currency: "$"
        },
        applicationStatus: "interview",
        description: "Work across frontend and backend systems to deliver scalable e-commerce solutions."
    },
    {
        companyName: "Meta",
        jobTitle: "React Native Developer",
        workType: "remote",
        employmentType: "Contract",
        salary: {
            min: "100,000",
            max: "140,000",
            currency: "$"
        },
        applicationStatus: "rejected",
        description: "Build cross-platform mobile applications used by millions of global users."
    },
    {
        companyName: "Netflix",
        jobTitle: "UI/UX Engineer",
        workType: "hybrid",
        employmentType: "Full-time",
        salary: {
            min: "125,000",
            max: "170,000",
            currency: "$"
        },
        applicationStatus: "not applied",
        description: "Design and implement highly engaging user interfaces for streaming platforms."
    },
    {
        companyName: "Spotify",
        jobTitle: "Software Engineer",
        workType: "remote",
        employmentType: "Full-time",
        salary: {
            min: "115,000",
            max: "160,000",
            currency: "$"
        },
        applicationStatus: "not applied",
        description: "Develop backend systems powering music streaming and recommendation engines."
    },
    {
        companyName: "Airbnb",
        jobTitle: "JavaScript Developer",
        workType: "remote",
        employmentType: "Part-time",
        salary: {
            min: "90,000",
            max: "120,000",
            currency: "$"
        },
        applicationStatus: "not applied",
        description: "Improve booking and hosting experiences with modern JavaScript frameworks."
    },
    {
        companyName: "Tesla",
        jobTitle: "DevOps Engineer",
        workType: "onsite",
        employmentType: "Full-time",
        salary: {
            min: "135,000",
            max: "180,000",
            currency: "$"
        },
        applicationStatus: "not applied",
        description: "Manage CI/CD pipelines and cloud infrastructure to support large-scale applications."
    }
];

// Filter data of status interview
let interviewPostData = allPostData.filter(post => post.applicationStatus === "interview");

// Filter data of status rejected
let rejectedPostData = allPostData.filter(post => post.applicationStatus === "rejected");

function renderJobPost(data) {
    const containerEl = document.querySelector("#all-job-post-container");
    containerEl.innerHTML = "";
    if (data.length > 0) {
        for (const jobPost of data) {
            const newPost = document.createElement("div");
            newPost.classList = "flex justify-between bg-white p-8 shadow rounded-2xl";
            newPost.innerHTML = `
                <div>
                    <h1 class="text-xl font-bold">${jobPost.companyName}</h1>
                    <p class="text-gray-500 mt-1">${jobPost.jobTitle}</p>

                    <div class="mt-2 md:flex gap-2 items-center text-gray-500">
                        <p class="capitalize">${jobPost.workType}</p>
                        <span class="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                        <p>${jobPost.employmentType}</p>
                        <span class="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                        <p>$${jobPost.salary.min} - $${jobPost.salary.max}</p>
                    </div>

                    <button class="mt-5 btn 
                    ${jobPost.applicationStatus ===
                    "interview" ? "btn-success text-white" :
                    jobPost.applicationStatus ===
                        "rejected" ? "btn-error text-white" :
                        "btn-active"}  uppercase text-xs">${jobPost.applicationStatus}</button>

                    <p class="mt-2">${jobPost.description}</p>

                    <!-- Action buttons -->
                    <div class="mt-4 flex flex-wrap gap-2">
                        <button class="btn btn-outline btn-success uppercase">Interview</button>
                        <button class="btn btn-outline btn-error uppercase">Rejected</button>
                    </div>
                </div>

                <!-- Post delete button -->
                <button  class="btn btn-circle p-6">
                    <i class="fa-regular fa-trash-can fa-lg"></i>
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
            clickedButton.add("btn-info", "text-white");
            updateAvailability(`${allPostData.length} jobs`);
            renderJobPost(allPostData);
        } else if (clickedButton.contains("filter-interview")) {
            clickedButton.add("btn-info", "text-white");

            updateAvailability(`${interviewPostData.length} of ${allPostData.length} jobs`);
            renderJobPost(interviewPostData);
        } else if (clickedButton.contains("filter-rejected")) {
            clickedButton.add("btn-info", "text-white");

            updateAvailability(`${rejectedPostData.length} of ${allPostData.length} jobs`);
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

function updateAvailability(str) {
    document.getElementById("available-jobs").innerText = `${str}`;
}

renderJobPost(allPostData);
countApplicationStatus();
updateAvailability(`${allPostData.length} jobs`);