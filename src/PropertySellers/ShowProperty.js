import {useCallback} from 'react';
import {
  Show,
  TextField,
  ShowController,
  TabbedShowLayout,
  Tab,
  Datagrid,
  ArrayField,
  ImageField,
  ListButton,
  TopToolbar,
  DateField
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import ImageAvatar from '../components/ImageAvatar';
import PropTypes, { element } from 'prop-types';
import ResponsiveGallery from 'react-responsive-gallery';
//import moment from 'moment';
import moment from 'moment-timezone';
import _ from 'lodash';

import {Calendar, momentLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
moment.tz.setDefault('UTC/Etc');

let offset = new Date().getTimezoneOffset();

const localizer = momentLocalizer(moment);

const useStyles = makeStyles({
  idBox: { width: 300, display: 'inline-block' },
});

const UserShowActions = ({ basePath }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Go Back to List" />
  </TopToolbar>
);
const MyGallery = (props) => {

  let images = [];
  if( props.record && props.record.gallery && props.record.gallery.length){
    props.record.gallery.forEach(element =>{
      images.push({src:element.media_url});
    });
  }

  return(
    <ResponsiveGallery 
      useLightBox
      images={images}
      screenWidthSizes={{
        xs: 400,
        s: 600,
        m: 800,
        l: 1000,
        xl: 1200
      }}
      numOfImagesPerRow={{
        xs: 1,
        s: 2,
        m: 3,
        l: 4,
        xl: 5,
        xxl: 5
      }}
      imagesPaddingBottom={{
        xs: 5,
        s: 10,
        m: 15,
        l: 20,
        xl: 25,
        xxl: 20
      }}
      imagesMaxWidth={{
        xs: 100,
        s: 100,
        m: 90,
        l: 90,
        xl: 100,
        xxl: 100
      }}
      colsPadding={{
        xs: 5,
        s: 10,
        m: 15,
        l: 10,
        xl: 10,
        xxl: 10
      }}  
    />
  );
};
const MyCalendar = (props) => {
console.log(props);
  const mDate = (date) => {
    if ( offset > 0 ){
      return moment(date).subtract(offset,'minutes').format();
    }else{
      return moment(date).add(offset,'minutes').format();
    }
  };

  let calendarEvents = [];
  if ( props.record && props.record.events && props.record.events.length ){
    props.record.events.forEach(element => {
      calendarEvents.push({
        id: element.id,
        title: 'Event: '+element.name+ ' at '+element.venue,
        start: mDate(element.start),
        end: mDate(element.end),
        type: 'events'
      });
    });
  }
  if ( props.record && props.record.sessions && props.record.sessions.length ){
    props.record.sessions.forEach(element => {
      calendarEvents.push({
        id: element.id,
        title: 'Session: '+element.name,
        start: mDate(element.start),
        end: mDate(element.end),
        type: 'sessions'
      });
    });
  }
  if ( props.record && props.record.seasons && props.record.seasons.length ){
    props.record.seasons.forEach(element => {
      calendarEvents.push({
        id: element.id,
        title: 'Season: '+element.name,
        start: mDate(element.start),
        end: mDate(element.end),
        type: 'seasons'
      });
    });
  }
  if ( props.record && props.record.meetings && props.record.meetings.length ){
    props.record.meetings.forEach(element => {
      calendarEvents.push({
        id: element.id,
        title: 'Meeting: with '+element.host,
        start: mDate(element.start),
        end: mDate(element.end),
        type: 'meetings'
      });
    });
  }
  if ( props.record && props.record.facilities && props.record.facilities.length ){
    props.record.facilities.forEach(element => {
      calendarEvents.push({
        id: element.id,
        title: 'Facility: '+element.name,
        start:  mDate(element.start),
        end: mDate(element.end),
        type: 'facilityservices'
      });
    });
  }

  const eventPropGetter = useCallback(
    () => ({
      ...({
        style: {
          backgroundColor: '#042747',
          color: '#ffffff'
        },
      }),
    }),
    []
  );

  return (
    <Calendar
      localizer={localizer}
      popup={true}
      // onShowMore={(events, date) => setState({ showModal: true, events })}
      onSelectEvent={(event)=>{
        console.log(event);
        window.location.href = window.location.href.replace(window.location.hash,'')+'#/'+event.type+'/'+event.id+'/show';
        //window.location.href = window.location.href.replace( /show\/\d+/g, 'show/'+(event.type === 'event' ? 1 : (event.type === 'session' ? 2 : (event.type === 'season' ? 3 : 0))));
      }}
      events={calendarEvents}
      eventPropGetter={eventPropGetter}
      step={60}
      defaultDate={moment().format()} />
  );
};

const ShowUser = (props) => {
  const classes = useStyles();
  return (
    <ShowController {...props}>
      {(controllerProps) => (
        <Show {...props} {...controllerProps} title={`User ${
          !_.isUndefined(controllerProps.record)
            ? controllerProps.record.name
            : ''
        }`} actions={<UserShowActions/>}   >
          <TabbedShowLayout>
            <Tab label="Details">
              {
                controllerProps.record &&
                controllerProps.record.info &&
                controllerProps.record.info.photo && (
                  <ImageAvatar source="info.photo" className={classes.idBox} />
                )
              }
              {
                controllerProps.record &&
                controllerProps.record.photo && (
                  <ImageAvatar source="photo" className={classes.idBox} />
                )
              }
              {
                controllerProps.record &&
                controllerProps.record.image && (
                  <ImageAvatar source="image" className={classes.idBox} />
                )
              }
              <TextField source="name" label="Name" className={classes.idBox} />
              {
                controllerProps.record &&
                controllerProps.record.phone && (
                  <TextField source="phone" label="Phone" className={classes.idBox} />
                )
              }
              {
                controllerProps.record &&
                controllerProps.record.parentId &&
                controllerProps.record.parent_name ? (
                  <TextField source="username" label="Username" className={classes.idBox} />
                ) : (
                  <TextField source="email" label="Email" className={classes.idBox} />
                )
              }
              {
                controllerProps.record &&
                controllerProps.record.role &&
                controllerProps.record.role.role_name && (
                  <TextField source="role.role_name" label="Role" className={classes.idBox} />
                )
              }
              {
                controllerProps.record &&
                controllerProps.record.parentId &&
                controllerProps.record.parent_name && (
                  <TextField source="parent_name" label="Parent User" className={classes.idBox} />
                )
              }
              {
                controllerProps.record &&
                controllerProps.record.parentId &&
                controllerProps.record.privacy && (
                  <TextField source="privacy" label="Privacy" className={classes.idBox} />
                )
              }
              {
                controllerProps.record &&
                controllerProps.record.info &&
                controllerProps.record.info.acheivement && (
                  <TextField source="info.acheivement" label="Acheivement" className={classes.idBox} />
                )
              }
              {
                controllerProps.record &&
                controllerProps.record.info &&
                controllerProps.record.info.description && (
                  <TextField source="info.description" label="Description" className={classes.idBox} />
                )
              }
              {
                controllerProps.record &&
                controllerProps.record.info &&
                controllerProps.record.info.organization_name && (
                  <TextField source="info.organization_name" label="Organization Name" className={classes.idBox} />
                )
              }
              {
                controllerProps.record &&
                controllerProps.record.info &&
                controllerProps.record.info.experience && (
                  <TextField source="info.experience" label="Experience" className={classes.idBox} />
                )
              }
              {
                controllerProps.record &&
                controllerProps.record.info &&
                controllerProps.record.info.team_name && (
                  <TextField source="info.team_name" label="Team Name" className={classes.idBox} />
                )
              }
              {
                controllerProps.record &&
                controllerProps.record.info &&
                controllerProps.record.info.fullname && (
                  <TextField source="info.fullname" label="Full Name" className={classes.idBox} />
                )
              }
              {
                controllerProps.record &&
                controllerProps.record.info &&
                controllerProps.record.info.dob && (
                  <TextField source="info.dob" label="Date of Birth" className={classes.idBox} />
                )
              }
              {
                controllerProps.record &&
                controllerProps.record.info &&
                controllerProps.record.info.coverphoto && (
                  <ImageField source="info.coverphoto" label="Cover Photo" className={classes.idBox} />
                )
              }
              {
                controllerProps.record &&
                controllerProps.record.info &&
                controllerProps.record.info.video && (
                  <ImageField source="info.video" label="Video" className={classes.idBox} />
                )
              }

            </Tab>
            {
              controllerProps.record &&
              controllerProps.record.events &&
              controllerProps.record.events.length && (
                <Tab label="Events">
                  <ArrayField source="events" addLabel={false}>
                    <Datagrid>
                      <TextField source="name" label="Title" />
                    </Datagrid>
                  </ArrayField>
                </Tab>
              )
            }
            {
              controllerProps.record &&
              controllerProps.record.sessions &&
              controllerProps.record.sessions.length && (
                <Tab label="Sessions">
                  <ArrayField source="sessions" addLabel={false}>
                    <Datagrid>
                      <TextField source="name" label="Title" />
                    </Datagrid>
                  </ArrayField>
                </Tab>
              )
            }
            {
              controllerProps.record &&
              controllerProps.record.seasons &&
              controllerProps.record.seasons.length && (
                <Tab label="Seasons">
                  <ArrayField source="seasons" addLabel={false}>
                    <Datagrid>
                      <TextField source="name" label="Title" />
                    </Datagrid>
                  </ArrayField>
                </Tab>
              )
            }
            {
              controllerProps.record &&
              controllerProps.record.childrens &&
              controllerProps.record.childrens.length && (
                <Tab label="Childrens">
                  <ArrayField source="childrens" addLabel={false}>

                    <Datagrid>
                      <TextField source="name" label="Name" />
                    </Datagrid>
                  </ArrayField>
                </Tab>
              )
            }
            {
              controllerProps.record &&
              controllerProps.record.meetings &&
              controllerProps.record.meetings.length && (
                <Tab label="Meetings">
                  <ArrayField source="meetings" addLabel={false}>
                    <Datagrid>
                      <DateField source="date" label="Date"  options={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }}/>
                      <TextField source="time" label="Time" />
                      <TextField source="host" label="Host" />
                    </Datagrid>
                  </ArrayField>
                </Tab>
              )
            }
            {
              controllerProps.record &&
              controllerProps.record.interests &&
              controllerProps.record.interests.length && (
                <Tab label="Interests">
                  <ArrayField source="interests" addLabel={false}>
                    <Datagrid>
                      <TextField source="name" label="Name" />
                    </Datagrid>
                  </ArrayField>
                </Tab>
              )
            }
            {
              controllerProps.record &&
              controllerProps.record.facilities &&
              controllerProps.record.facilities.length && (
                <Tab label="Facilities">
                  <ArrayField source="facilities" addLabel={false}>
                    <Datagrid>
                      <TextField source="name" label="Name" />
                    </Datagrid>
                  </ArrayField>
                </Tab>
              )
            }
            {
              controllerProps.record &&
              controllerProps.record.groups &&
              controllerProps.record.groups.length && (
                <Tab label="Groups">
                  <ArrayField source="groups" addLabel={false}>
                    <Datagrid>
                      <TextField source="name" label="Name" />
                    </Datagrid>
                  </ArrayField>
                </Tab>
              )
            }
            {
              controllerProps.record &&
              controllerProps.record.teammembers &&
              controllerProps.record.teammembers.length && (
                <Tab label="Team Members">
                  <ArrayField source="teammembers" addLabel={false}>
                    <Datagrid>
                      <TextField source="member" label="Name" />
                      <DateField source="joined" label="Joined Date"  options={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }}/>
                    </Datagrid>
                  </ArrayField>
                </Tab>
              )
            }
            {
              controllerProps.record && (
                <Tab label="Calendar">
                  <div style={{height: '70vh'}}>
                    <MyCalendar
                      record={controllerProps.record}
                    />
                  </div>
                </Tab>
              )
            }
            {
              controllerProps.record &&
              controllerProps.record.gallery && (
                <Tab label="Gallery">
                  <MyGallery 
                    record={controllerProps.record}
                  />
                </Tab>
              )
            }
          </TabbedShowLayout>
        </Show>
      )}
    </ShowController>
  );
};

UserShowActions.propTypes = {
  basePath: PropTypes.string
};

MyCalendar.propTypes = {
  record: PropTypes.object
};

MyGallery.propTypes = {
  record: PropTypes.object
};
export default ShowUser;
