package com.lithan.kyn.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lithan.kyn.entity.UserAccount;

public interface UserAccountRepository extends JpaRepository<UserAccount, Integer> {

  public Optional<UserAccount> findByEmail(String email);

  Boolean existsByEmail(String email);
}