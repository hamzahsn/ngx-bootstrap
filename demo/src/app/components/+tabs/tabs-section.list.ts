import { DemoTabsBasicComponent } from './demos/basic/basic';
import { DemoTabsManualComponent } from './demos/manual/manual';
import { DemoTabsDynamicComponent } from './demos/dynamic/dynamic';
import { DemoTabsPillsComponent } from './demos/pills/pills';
import { DemoTabsVerticalPillsComponent } from './demos/vertical-pills/vertical-pills';
import { DemoTabsJustifiedComponent } from './demos/justified/justified';
import { DemoTabsStylingComponent } from './demos/styling/styling';
import { DemoTabsConfigComponent } from './demos/config/config';
import { DemoTabsDisableComponent } from './demos/disable/disable';
import { DemoTabsCustomComponent } from './demos/custom-template/custom-template';
import { DemoTabsSelectEventComponent } from './demos/select-event/select-event';

import { ContentSection } from '../../docs/models/content-section.model';
import { DemoTopSectionComponent } from '../../docs/demo-section-components/demo-top-section/index';
import { ExamplesComponent } from '../../docs/demo-section-components/demo-examples-section/index';
import { ApiSectionsComponent } from '../../docs/demo-section-components/demo-api-section/index';

import {
  NgApiDocComponent,
  NgApiDocConfigComponent
} from '../../docs/api-docs';

export const demoComponentContent: ContentSection[] = [
  {
    name: 'Usage',
    anchor: 'usage',
    outlet: DemoTopSectionComponent,
    content: {
      doc: require('!!raw-loader?lang=typescript!./docs/usage.md')
    }
  },
  {
    name: 'Examples',
    anchor: 'examples',
    outlet: ExamplesComponent,
    content: [
      {
        title: 'Basic',
        anchor: 'basic',
        component: require('!!raw-loader?lang=typescript!./demos/basic/basic'),
        html: require('!!raw-loader?lang=markup!./demos/basic/basic.html'),
        outlet: DemoTabsBasicComponent
      },
      {
        title: 'Manual selection',
        anchor: 'tabs-manual',
        component: require('!!raw-loader?lang=typescript!./demos/manual/manual'),
        html: require('!!raw-loader?lang=markup!./demos/manual/manual.html'),
        outlet: DemoTabsManualComponent
      },
      {
        title: 'Disable selection',
        anchor: 'tabs-disable-selection',
        component: require('!!raw-loader?lang=typescript!./demos/disable/disable'),
        html: require('!!raw-loader?lang=markup!./demos/disable/disable.html'),
        outlet: DemoTabsDisableComponent
      },
      {
        title: 'Dynamic tabs',
        anchor: 'tabs-dynamic',
        component: require('!!raw-loader?lang=typescript!./demos/dynamic/dynamic'),
        html: require('!!raw-loader?lang=markup!./demos/dynamic/dynamic.html'),
        outlet: DemoTabsDynamicComponent
      },
      {
        title: 'Pills',
        anchor: 'tabs-Pills',
        component: require('!!raw-loader?lang=typescript!./demos/pills/pills'),
        html: require('!!raw-loader?lang=markup!./demos/pills/pills.html'),
        outlet: DemoTabsPillsComponent
      },
      {
        title: 'Vertical Pills',
        anchor: 'tabs-vertical-pills',
        component: require('!!raw-loader?lang=typescript!./demos/vertical-pills/vertical-pills'),
        html: require('!!raw-loader?lang=markup!./demos/vertical-pills/vertical-pills.html'),
        outlet: DemoTabsVerticalPillsComponent
      },
      {
        title: 'Justified',
        anchor: 'tabs-justified',
        component: require('!!raw-loader?lang=typescript!./demos/justified/justified'),
        html: require('!!raw-loader?lang=markup!./demos/justified/justified.html'),
        description: '<p><i>Bootstrap 4 doesn\'t have justified classes</i></p>',
        outlet: DemoTabsJustifiedComponent
      },
      {
        title: 'Styling',
        anchor: 'tabs-styling',
        component: require('!!raw-loader?lang=typescript!./demos/styling/styling'),
        html: require('!!raw-loader?lang=markup!./demos/styling/styling.html'),
        outlet: DemoTabsStylingComponent
      },
      {
        title: 'Select event',
        anchor: 'select-event',
        component: require('!!raw-loader?lang=typescript!./demos/select-event/select-event'),
        html: require('!!raw-loader?lang=markup!./demos/select-event/select-event.html'),
        description: '<p>You can subscribe to tab\'s <code>select</code> event</p>',
        outlet: DemoTabsSelectEventComponent
      },
      {
        title: 'Configuring defaults',
        anchor: 'tabs-config-defaults',
        component: require('!!raw-loader?lang=typescript!./demos/config/config'),
        html: require('!!raw-loader?lang=markup!./demos/config/config.html'),
        outlet: DemoTabsConfigComponent
      },
      {
        title: 'Custom template',
        anchor: 'tabs-custom-template',
        component: require('!!raw-loader?lang=typescript!./demos/custom-template/custom-template'),
        html: require('!!raw-loader?lang=markup!./demos/custom-template/custom-template.html'),
        outlet: DemoTabsCustomComponent
      }
    ]
  },
  {
    name: 'API Reference',
    anchor: 'api-reference',
    outlet: ApiSectionsComponent,
    content: [
      {
        title: 'TabsetComponent',
        anchor: 'tabset-component',
        outlet: NgApiDocComponent
      },
      {
        title: 'TabDirective',
        anchor: 'tab-directive',
        outlet: NgApiDocComponent
      },
      {
        title: 'TabHeadingDirective',
        anchor: 'tab-heading-directive',
        outlet: NgApiDocComponent
      },
      {
        title: 'TabsetConfig',
        anchor: 'tabset-config',
        outlet: NgApiDocConfigComponent
      }
    ]
  }
];
