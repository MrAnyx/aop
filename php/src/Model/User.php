<?php

namespace App\Model;

use App\Annotation\Logging;

class User {

   private $firstname;
   private $lastname;

   public function __construct(string $firstname, string $lastname) {
      $this->firstname = $firstname;
      $this->lastname = $lastname;
   }

   public function getFirstname() {
      return $this->firstname;
   }

   public function setFirstname($firstname): self {
      $this->firstname = $firstname;
      return $this;
   }

   public function getLastname() {
      return $this->lastname;
   }

   public function setLastname($lastname): self {
      $this->lastname = $lastname;
      return $this;
   }

   /**
    * Display info about the user
    * @Logging
    * @return string
    */
   public function displayInfo(): string {
      return printf("Bonjour, je m'appelle %s %s", $this->firstname, $this->lastname);
   }
}