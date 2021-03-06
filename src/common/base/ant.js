import Vue from 'vue'
import {
    Button,
    Field,
    Tabbar,
    TabbarItem,
    Tab,
    Tabs,
    Col,
    Row,
    Image as VanImage,
    Swipe,
    SwipeItem,
    Lazyload,
    Icon,
    Search,
    Loading,
    Sticky,
    List,
    PullRefresh,
    Toast,
    NavBar,
    Switch,
    Cell, 
    CellGroup,
    Popup,
    Uploader,
    Empty,
} from 'vant';



Vue.use(Button);
Vue.use(Field);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Loading);
Vue.use(Sticky);
Vue.use(List);
Vue.use(PullRefresh);
Vue.use(Toast);
Vue.use(NavBar);
Vue.use(Switch);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Popup);
Vue.use(Uploader);
Vue.use(Empty);


Toast.setDefaultOptions({ duration: 1500 });