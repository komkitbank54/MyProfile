export interface NavItem {
    id: string;
    icon: string;
    label: string;
}

export const NAV_ITEMS: NavItem[] = [
    { id: "about", icon: "about-icon", label: "About"},
    { id: "skills", icon: "skills-icon", label: "Skills"},
    { id: "exp", icon: "exp-icon", label: "Experience"},
    { id: "port", icon: "port-icon", label: "Portfolio" },
    { id: "resume", icon: "resume-icon", label: "Resume" }
]