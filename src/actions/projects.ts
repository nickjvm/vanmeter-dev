"use server";

type ProjectRequest = {
  repo: string;
  name: string;
};
export async function getProjects(repos: ProjectRequest[]) {
  const requests = repos.map((repo) =>
    fetch(`https://api.github.com/repos/nickjvm/${repo.repo}`, {
      next: { revalidate: 60 * 60 * 24 },
    })
      .then((r) => r.json())
      .then((project) => ({
        ...project,
        name: repo.name || project.name,
      }))
  );

  const projects = await Promise.all(requests).then((projects) =>
    projects.map((project) => ({
      title: project.name,
      description: project.description,
      href: project.homepage,
      source: project.html_url,
      tags: project.topics,
    }))
  );
  return projects;
}
