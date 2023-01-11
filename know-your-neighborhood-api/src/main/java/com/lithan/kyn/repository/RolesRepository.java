package com.lithan.kyn.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lithan.kyn.entity.ERole;
import com.lithan.kyn.entity.Roles;

public interface RolesRepository extends JpaRepository<Roles, Long> {

  Roles findByName(ERole roleName);
}
