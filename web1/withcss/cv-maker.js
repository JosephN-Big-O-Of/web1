// Get the form and preview container
const cvForm = document.getElementById("cvForm");
const cvPreview = document.getElementById("cvPreview");

// Helper to convert comma-separated skills into tags
function formatSkills(skills) {
  return skills
    .split(",")
    .map((skill) => `<li class="cv-tag">${skill.trim()}</li>`)
    .join("");
}

// Handle form submission
cvForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get values
  const fullName = cvForm.fullName.value;
  const role = cvForm.role.value;
  const email = cvForm.email.value;
  const phone = cvForm.phone.value;
  const location = cvForm.location.value;
  const summary = cvForm.summary.value;
  const skills = cvForm.skills.value;
  const education = cvForm.education.value;
  const experience = cvForm.experience.value;
  const languages = cvForm.languages.value;

  // Build the CV HTML
  const cvHTML = `
    <div class="cv-hero">
      <div class="cv-name-role">
        <h2 class="cv-name">${fullName}</h2>
        <p class="cv-role">${role}</p>
      </div>
      <div class="cv-summary">
        <p>${summary}</p>
      </div>
    </div>

    <div class="cv-layout">
      <aside class="cv-sidebar">
        <section class="cv-card">
          <h3 class="cv-section-title">Contact</h3>
          <ul class="cv-info-list">
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Location:</strong> ${location}</li>
          </ul>
        </section>

        <section class="cv-card">
          <h3 class="cv-section-title">Skills</h3>
          <ul class="cv-tag-list">
            ${formatSkills(skills)}
          </ul>
        </section>

        <section class="cv-card">
          <h3 class="cv-section-title">Languages</h3>
          <ul class="cv-info-list">
            ${languages
              .split("\n")
              .map((lang) => `<li>${lang}</li>`)
              .join("")}
          </ul>
        </section>
      </aside>

      <section class="cv-main">
        <section class="cv-card">
          <h3 class="cv-section-title">Education</h3>
          ${education
            .split("\n")
            .map((line) => {
              const parts = line.split(",");
              return `<div class="cv-item">
                        <div class="cv-item-header">
                          <div>
                            <h4 class="cv-item-title">${parts[0]}</h4>
                            <p class="cv-item-subtitle">${parts[1] || ""}</p>
                          </div>
                          <span class="cv-item-date">${parts[2] || ""}</span>
                        </div>
                      </div>`;
            })
            .join("")}
        </section>

        <section class="cv-card">
          <h3 class="cv-section-title">Experience</h3>
          ${experience
            .split("\n")
            .map((line) => {
              const parts = line.split(",");
              return `<div class="cv-item">
                        <div class="cv-item-header">
                          <div>
                            <h4 class="cv-item-title">${parts[0]}</h4>
                            <p class="cv-item-subtitle">${parts[1] || ""}</p>
                          </div>
                          <span class="cv-item-date">${parts[2] || ""}</span>
                        </div>
                        ${
                          parts[3]
                            ? `<ul class="cv-item-list"><li>${parts[3]}</li></ul>`
                            : ""
                        }
                      </div>`;
            })
            .join("")}
        </section>
      </section>
    </div>
  `;

  // Render in preview
  cvPreview.innerHTML = cvHTML;
});
