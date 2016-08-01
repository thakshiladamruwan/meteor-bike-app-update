HomeController = RouteController.extend({
  onBeforeAction: function () {
    this.redirect('/bikehome/');

  }
});

LoginController = RouteController.extend({
  onBeforeAction: function () {
    this.next();
  },
  onAfterAction: function(){

  }
});

OverviewController = RouteController.extend({
  onBeforeAction: function () {
    this.next();
  }
});

ReportsController = RouteController.extend({
  onBeforeAction: function () {
    this.next();
  }
});

Router.route('home', {
  path: '/'
});

Router.route('bikehome', {
  path: '/bikehome'
});

Router.route('overview', {
  layoutTemplate: 'dashboard',
  path: '/dashboard/overview'
});

Router.route('reports', {
  layoutTemplate: 'homeIndex',
  path: '/homeIndex/reports'
});
Router.route('about', {
  path: '/about'
});
Router.route('register', {
  path: '/register'
});
Router.route('blog', {
  path: '/blog'
});
Router.route('rdetails', {
  path: '/rdetails'
});

Router.route('events', {
  path: '/events'
});

Router.route('gallery', {
  path: '/gallery'
});
