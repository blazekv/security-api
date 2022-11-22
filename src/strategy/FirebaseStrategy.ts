import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class FirebaseStrategy extends PassportStrategy(Strategy) {
  public constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey:
        '-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIIDIh6/l/ZCH0wDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAxMmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMjIw\nNDA5MDkzODM3WhcNMjIwNDI1MjE1MzM3WjAxMS8wLQYDVQQDEyZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBANkO0QPCFwx6uV2MgB15u5nGx2WfYogc5Ki8R3XTOrsJHUgB\nPfcxyR5V2DnBJ6QkfU6uDglXmrfOe7JrZWEHDdBsmcQ/PpNU3UluY5l8r6jDhhRI\n+psi58zo0RUEeklWjoqI3fZu9hBr4OzebCciiLSi6muSgY1eQn579OZIfbLDKYLS\n/v1cLcsEjmSkOCynMIdxH787FR9miUqrXbVgEgz1Mbu+h61yuOAcEjC6fMV2NR2L\nt45XNmFaXm5RivbfmspPNX1ig+qTObR0hIr8TH9N3cqljP91o8bxJbF6i+SRDefH\ncBOO0hROqyA4tZioQYmghILjREgFbXEwGy7x6kMCAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBAJp8BUHy1Kd5p8XCFggyBeErt//NvD0Mb2jruT38M919\nhkVAQTFrKC5nWo7fvrFJIuVIa5HeTR0036baRcB3XgzVuhHqXdCf5/OUxbo9Ocz0\nExM+9w9g1wo830wHo+qlxUFjblRohHSkW8zjzeJiH5NNP50pYnSRuv5A0N8Oj4BU\nqyPCp7k1JRduK5lI2ZfOSXtVyc8D/CtLHNnIQDwicTrO92IVa4Zl06LpWeMnSZ/Z\n92v2lcGRcp1h8V9SDKQJq6LYG5bOlSg8AEEnvql8+WTIZPRCcgEpMcTfxNP1Gapd\nMIxQfW79HhG/49UHwpNZfNo+QZFsmovfkbnj3XNbrPU=\n-----END CERTIFICATE-----\n',
    });
  }

  async validate(payload) {
    console.log(payload);
    const user = {
      user_id: payload.user_id,
      email: payload.email,
    };
    return user;
  }
}
