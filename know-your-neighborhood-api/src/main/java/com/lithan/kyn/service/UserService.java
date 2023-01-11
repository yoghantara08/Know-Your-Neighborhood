package com.lithan.kyn.service;

import java.util.List;

import com.lithan.kyn.entity.ERole;
import com.lithan.kyn.entity.Roles;
import com.lithan.kyn.entity.UserAccount;
import com.lithan.kyn.model.EditProfileDto;
import com.lithan.kyn.model.UserDto;

public interface UserService {

  Roles createRole(ERole roleName);

  UserAccount findByEmail(String email);

  List<UserDto> listUser();

  UserAccount getById(int userId);

  UserAccount editProfile(EditProfileDto editProfileDto);

}
