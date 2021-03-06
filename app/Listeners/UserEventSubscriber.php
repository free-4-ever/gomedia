<?php

namespace App\Listeners;

use App\Transaction;

class UserEventSubscriber
{
   /**
    * Handle user login events.
    */
   public function handleUserLogin($event)
   {
      Transaction::create([
         'user_id' => $event->user->id,
         'details' => 'Logged in',
      ]);
   }

   /**
    * Handle user logout events.
    */
   public function handleUserLogout($event)
   {
      Transaction::create([
         'user_id' => $event->user->id,
         'details' => 'Logged out',
      ]);
   }

   /**
    * Register the listeners for the subscriber.
    *
    * @param  \Illuminate\Events\Dispatcher  $events
    */
   public function subscribe($events)
   {
      $events->listen(
         'Illuminate\Auth\Events\Login',
         'App\Listeners\UserEventSubscriber@handleUserLogin'
      );

      $events->listen(
         'Illuminate\Auth\Events\Logout',
         'App\Listeners\UserEventSubscriber@handleUserLogout'
      );
   }
}
