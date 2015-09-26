import {Component, View} from 'angular2/core';

import {bootstrap} from 'angular2/bootstrap';

@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/app.html'
})
class Socially {
    constructor () {
        this.parties = [
          {'name': 'Dubstep-Free Zone',
           'description': 'Can we please just for an evening not listen to dubstep.',
           'location': 'Palo Alto'
          },
          {'name': 'All dubstep all the time',
           'description': 'Get it on!',
           'location': 'Palo Alto'
          },
          {'name': 'Savage lounging',
           'description': 'Leisure suit required. And only fiercest manners.',
           'location': 'San Francisco'
          }
        ];
    }
}

bootstrap(Socially);