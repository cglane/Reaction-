import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "Product Detail Simple",
  name: "product-detail-simple",
  icon: "fa fa-cubes",
  autoEnable: true,
  registry: [{
    route: "/product/:handle/:variantId?",
    name: "product",
    template: "productDetailCustom",
    workflow: "coreProductWorkflow"
  }],
  layout: [{
    layout: "coreLayout",
    workflow: "coreProductWorkflow",
    collection: "Products",
    theme: "default",
    enabled: true,
    structure: {
      template: "productDetailCustom",
      layoutHeader: "layoutHeader",
      layoutFooter: "",
      notFound: "productNotFound",
      dashboardHeader: "productDetailSimpleToolbar",
      dashboardControls: "productDetailDashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    }
  }]
});
