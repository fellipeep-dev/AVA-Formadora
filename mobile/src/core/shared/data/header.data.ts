interface MenuHeader{
  label: string;
  path: string;
  icon: string;
  props?: any
}

export const menuHeader: MenuHeader[] = [
  {
    label: "Perfil",
    path: "/profile",
    icon: "settings-outline"
  },
  {
    label: "Meus treinos",
    path: "/main",
    icon: "barbell"
  },
  {
    label: "Sair da conta",
    path: "/",
    props: "(click)='exit()'",
    icon: "exit-outline"
  },
]