export const HC1 = `The Muhammadiyah Web Content Collaboration project is a web platform designed to support collaboration in the creation and development of Muhammadiyah studies. This platform allows users to create, edit, and publish studies collaboratively, similar to the forking mechanism on GitHub.`;

export const HC2 = `The first line of the code snippet is the name of the GitHub Actions workflow. In this case, the workflow is called “Daily Contributions”. The next section defines when the workflow should run. In this case, it is set to run on a schedule using the cron syntax. The cron syntax allows you to set up the workflow to run at specific times of the day or week. I set mine to run Monday — Friday at midnight UTC.`;

export const HC3 = `The third step is to commit the changes to the repository. This step uses the EndBug/add-and-commit@v7 action to commit the changes. The author name and email are set to “GitHub Actions”, and “actions@github.com”, which I set to my GitHub name and email, respectively.`;

export const HCL1 = [
  "CRUD for Studies: Users can create, read, update, and delete studies available on the platform.",
  "CRUD for Users: User management that allows admins to add, edit, and delete users.",
  "Upload New Version from Other Users: Users can upload new versions of existing studies, similar to GitHub's forking feature, enabling dynamic collaboration.",
  "Admin: An admin panel that provides full control over platform management, including studies and user management.",
  "Admin Dashboard: A dashboard for admins with statistics and important information related to platform activity.",
  "Search: A search feature that makes it easy for users to find studies or other users on the platform.",
];

export const HCL2 = [
  "Tailwind CSS: For responsive and modern interface design.",
  "Laravel: A powerful PHP framework for server-side development.",
  "Breeze: A simple starter kit for Laravel that provides basic authentication.",
  "Summernote: A rich text editor to facilitate users in composing study content.",
  "Dompdf: To generate PDF documents from published studies.",
  "MySQL: A relational database used to store user and study data.",
];
