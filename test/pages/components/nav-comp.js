class navComponent {

    get navLinkList() {
        return $$("#zak-primary-menu li[id*=menu]")
    }
}

export default new navComponent();